import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import {
  of, debounceTime, distinctUntilChanged, map, Observable, startWith, Subscription, switchMap
} from 'rxjs';

import { NumberConstant } from '../constants/number-constant';
import { StringConstant } from '../constants/string-constant';



@Injectable({
  providedIn: 'root'
})
export class UtilSharedService {

  dateFormat = 'M/d/yyyy';

  constructor() { }

  unSubscribeSubs(subs: Subscription[]) {
    if (subs && subs.length > NumberConstant.ZERO) {
      for (const sub of subs) {
        sub.unsubscribe();
      }
    }
  }

  // condition to check an Object keys contains atleast one valid value and returns a boolean.

  objKeysHasAtleastOneValue(obj: any): boolean {
    let flag = false;
    const ctrlArray = Object.keys(obj).map(key => obj[key]);
    if (ctrlArray && ctrlArray.length > NumberConstant.ZERO) {
      for (const ctrl of ctrlArray) {
        if (ctrl && (ctrl.value !== '' && ctrl.value !== null && ctrl.value !== undefined)) {
          flag = true;

          break;
        } else flag = false;
      }
    }

    return flag;
  }

  // Remove Array of Elements of from the source array on basis of key
  removeItmesFromSorceArray(source: any, removed: any, value: any): [] {
    if (source.length > NumberConstant.ZERO && removed.length > NumberConstant.ZERO && value) {
      return source.filter((item1: any) => {
        return !removed.find((item2: any) => {
          return item1[value] === item2[value];
        })
      })
    } else return source
  }

  removeInactiveItems(arr: any[]): any[] {
    if (arr && arr.length > NumberConstant.ZERO)
      return arr.filter((data: any) => data.deletionFlag <= NumberConstant.ZERO)
    else return arr
  }

  // Get 24 hours

  getHours() {
    const numbers = [...Array(25)].map((_, i) => i);
    const numArray = numbers.map((i, num) => i < 10 ? '0' + num : num.toString());
    const convertArray = numArray.map((num) => parseInt(num));

    return numArray;
  }

  generateYearsBetween(startYear: number = NumberConstant.TWO_THOUSAND, endYear: number = new Date().getFullYear(), increment?: number) {
    const endDate = endYear + NumberConstant.TWO;
    let years = [];

    for (var i = startYear; i <= endDate; i++) {
      years.push(startYear);
      startYear++;
    }
    return years;
  }

  setFocus(id: HTMLElement, duration: number = NumberConstant.ZERO) {
    if (id) setTimeout(() => id.focus(), duration);
  }


  alphaNumericSort = (arr: any[], key?: string) => {
    const hasKey = key && key !== '';
    const stringArray = arr.filter((str: any) => hasKey ?
      str[key] !== '' && str[key] !== null : str !== '' && str !== null);
    const sorter = (a: any, b: any) => {
      const isNumber = (n: any) => !isNaN(parseFloat(n)) && isFinite(n);
      if (isNumber(hasKey ? a[key] : a) && isNumber(hasKey ? b[key] : b)) {
        return parseFloat(hasKey ? a[key] : a) - parseFloat(hasKey ? a[key] : a);
      }
      const aValue = hasKey ? a[key].match(/\d+|\D+/g) : a.match(/\d+|\D+/g);
      const bValue = hasKey ? b[key].match(/\d+|\D+/g) : b.match(/\d+|\D+/g);
      let i = NumberConstant.ZERO;
      let len = Math.min(aValue.length, bValue.length);
      while (i < len && aValue[i] === bValue[i]) { i++; };
      if (i === len) {
        return aValue.length - bValue.length;
      };

      return aValue[i].toString().trim().toLowerCase().localeCompare(bValue[i].toString().trim().toLowerCase());
    };

    return stringArray.sort(sorter);

  }
  // Auto complete drodpwn filter data
  filteredData(ctrl: AbstractControl, arr: any[], key?: string) {
    const data = this.alphaNumericSort(arr, key);
    return ctrl.valueChanges.pipe(startWith(''),
      map(value => {
        if (value === null) return data.slice();
        else {
          const inputValue = typeof value === StringConstant.number ? value.toString() : value;
          const name = typeof inputValue === StringConstant.string ? inputValue : inputValue[key ? key : ''];
          return name ? this.filter(name as string, data, key) : data.slice();
        }
      })
    )
  }

  filteredDataComesFirst(ctrl: AbstractControl, arr: any[], key?: string, sort?: boolean,
    duplicates?: boolean, inActive?: boolean): Observable<any> {
    if (inActive) this.removeInactiveItems(arr)
    if (duplicates) arr = this.removeDuplicates(arr, key);
    const data = sort ? this.alphaNumericSort(arr, key) : arr;
    return ctrl.valueChanges.pipe(startWith(''), 
    debounceTime(NumberConstant.TWO_HUNDERED), distinctUntilChanged(),
      switchMap((value: any) => {
        if (!value || value === '') return of(data.slice());
        else {
          const inputValue = typeof value === StringConstant.number ? value.toString() : value;
          const name = typeof inputValue === StringConstant.string ? inputValue : inputValue[key ? key : ''];
          const filteredData = this.filter((name as string).trim(), data, key);
          const restData = data.filter((item1: any) =>
            !filteredData.some((item2: any) => key && key !== '' ? item1[key] === item2[key] :
              item1 === item2));
          return of([...filteredData]);
        }
      })
    )
  }

  filterBooks(ctrl: AbstractControl, arr: any[], key: string): Observable<any[]> {
    const data = arr.slice();  
    return ctrl.valueChanges.pipe(
      startWith(''), 
      // debounceTime(NumberConstant.TWO_HUNDERED), 
      // distinctUntilChanged(),
      switchMap((value: any) => {
        if (!value || value === '') return of(data); // Return original data if input is empty
  
        const inputValue = typeof value === StringConstant.number ? value.toString() : value;
        const name = inputValue.toString().trim().toLowerCase(); // Ensure the search string is trimmed and lowercase
  
        // Filter data based on the search string and transliteration key
        const filteredData = this.filterByTransliteration(name, data, key);
  
        // Return filtered data if matches found, else return original data
        return of(filteredData.length > 0 ? filteredData : data);
      })
    );
  }
  
  // New filterByTransliteration method for filtering by transliteration array
  private filterByTransliteration(value: string, arr: any[], key: string): any[] {
    return arr.filter((item: any) =>
      item[key]?.some((str: string) => str.toLowerCase().includes(value))
    );
  }
  
  convertNumToArray(num: number) {
    return Array.from({ length: num }, (_, i) => i + 1);
  }
  

  removeDuplicates(arr: any[], key?: string): any[] {
    const list = new Set();
    return arr.filter((item: any) => {
      const value = key && key !== '' ? item[key] : item;
      if (!list.has(value)) {
        list.add(value)
        return true;
      }
      return false
    })
  }

  hasDuplicates(arr: any[], key: string): boolean {
    const map = new Set();
    for (const item of arr) {
      const code = item[key];
      if (map.has(code)) return true;
      map.add(code);
    }
    return false;
  }


  private filter(value: string, arr: any[], key?: string): any[] {
    return arr.filter((data: any) => key && key !== '' ?
      data[key].toString().toLowerCase().includes(value.toString().trim().toLowerCase()) :
      data.toString().toLowerCase().includes(value.toString().toLowerCase()));
  }

  sortAlphaNum = (a: any, b: any) => a.toString().localeCompare(b.toString(), 'en', { numeric: true });

  convertBase64toUnitArray(str: string): Uint8Array {
    const byteStr = atob(str);
    const byteNumbers = new Array(byteStr.length);
    for (let i = 0; i < byteStr.length; i++) {
      byteNumbers[i] = byteStr.charCodeAt(i);
    }
    return new Uint8Array(byteNumbers);
  }

  formatBytes(bytes: number, decimals: number = NumberConstant.TWO): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  shortName = (name: string, num: number) => name && name.length > num &&
    name.substring(NumberConstant.ZERO, num) + '...' || name;

  generateUinqueId(baseStr: string): string {
    const timeStamp = Date.now().toString();
    const randomString = Math.random().toString(36).substring(2, 10);
    return `${baseStr}-${randomString}-${timeStamp}`;
  }

}




