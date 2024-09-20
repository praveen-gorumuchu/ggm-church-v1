
import { AfterViewInit, Component, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BibileBookList } from '../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../shared/services/bible.service';


@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent implements AfterViewInit, OnInit, OnDestroy {
  currentBook!: BibileBookList;
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private bibleService: BibleService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
      this.enterFullscreen();
  }

  enterFullscreen(): void {
    const elem = document.documentElement as any;  // The entire page
    
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
  }


  getBibleBook(book: BibileBookList) {
    this.currentBook = book;
    if (this.currentBook) {
      this.drawer.close();
    }
  }

  ngOnDestroy(): void {
    
  }

}
