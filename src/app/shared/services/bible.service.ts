import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, Subject, tap } from 'rxjs';
import { StringConstant } from '../constants/string-constant';
import { BibleBook, BibleBookTypes, BibleBooksModel } from '../models/bible-books/bible-books.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BibleService {
  private bibleBooksObs = new BehaviorSubject<BibleBookTypes[]>([]);
  readonly bibleBooksObsCast = this.bibleBooksObs.asObservable();
  private currentBookObs = new BehaviorSubject<BibleBook>({
    chapters: [],
    name: '',
    id: ''
  });
  readonly currentBookObsCast = this.currentBookObs.asObservable();
  private chapterIndexObs = new BehaviorSubject<number>(1);
  readonly chapterIndexObsCast = this.chapterIndexObs.asObservable();

  private localStorageKey = 'bibleKey';
  temp = false;

  constructor(private http: HttpClient) {
    this.loadData();
  }

  get baseUrl(): string {
    return `${environment.apiUrl}/${StringConstant.BIBLE_BOOKS}/`;
  }


  private loadData() {
    const cachedData: any = localStorage.getItem(this.localStorageKey);
    if (this.temp) {
      this.bibleBooksObs.next(JSON.parse(cachedData));
    } else {
      this.fetchDataFromLocalJSON();
    }
  }

  private fetchDataFromLocalJSON() {
    this.http.get<BibleBooksModel>(`${this.baseUrl}${StringConstant.BOOKS_LIST}`)
      .pipe(tap((data: BibleBooksModel) => {
        sessionStorage.setItem(this.localStorageKey, JSON.stringify(data));
        this.bibleBooksObs.next(data.list);
      }), catchError(error => {
        console.error('Error fetching data', error);
        return of([]);
      })
      )
      .subscribe();
  }

  getBook(path: string) {
    return this.http.get<BibleBook>(`${this.baseUrl}${path}.json`).pipe(
      tap((data: BibleBook) => {
        this.currentBookObs.next(data);
      })
    ).subscribe();
  }

  setSideBarStatus(flag:number) {
    this.chapterIndexObs.next(flag);
  }

  destory() {
    this.bibleBooksObs.unsubscribe();
    this.chapterIndexObs.unsubscribe();
  }

}
