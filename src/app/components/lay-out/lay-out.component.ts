
import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BibileBookList } from '../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../shared/services/bible.service';
import { BreakpointService } from '../../shared/services/breakpoint.service';

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent implements AfterViewInit, OnInit, OnDestroy {
  currentBook!: BibileBookList;
  @ViewChild('drawer') drawer!: MatDrawer;
  isMobile!: boolean;
  isTablet!: boolean
  isDrawerOpen: boolean = false;
  isToggleClick: boolean = false;

  constructor(private bibleService: BibleService, private breakpointService: BreakpointService,
  ) {
    this.breakpointService.isMobile$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.breakpointService.isTablet$.subscribe(isTablet => {
      this.isTablet = isTablet;
    });

  }

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
