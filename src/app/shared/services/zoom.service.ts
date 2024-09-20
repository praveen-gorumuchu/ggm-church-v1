import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {
private fontSize = 42
  constructor() { }

  zoomIn() {
    this.fontSize += 2; // Increase font size
    this.updateFontSize();
  }

  zoomOut() {
    if (this.fontSize > 10) { // Prevent too small font size
      this.fontSize -= 2; // Decrease font size
      this.updateFontSize();
    }
  }

  reset(){
    this.fontSize = 42;
    this.updateFontSize();
  }

  private updateFontSize() {
    const section = document.getElementById('zoom-container');
    if (section) {
      section.setAttribute('style', `font-size: ${this.fontSize}px`);
    }
  }
}
