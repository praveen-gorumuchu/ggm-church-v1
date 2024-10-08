import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonDownloadService {

  constructor() {}

  generateJsonFile(data: any, fileName: string): void {
    const jsonString = JSON.stringify(data, null, 2); 
    const blob = new Blob([jsonString], { type: 'application/json' }); 
    const url = URL.createObjectURL(blob); 

    const a = document.createElement('a'); 
    a.href = url; 
    a.download = `${fileName}.json`; 
    document.body.appendChild(a); 
    document.body.removeChild(a); 
    URL.revokeObjectURL(url); 
  }
}
