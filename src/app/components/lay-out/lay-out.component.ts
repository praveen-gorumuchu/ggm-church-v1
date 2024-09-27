import { NavigationEnd, Router } from '@angular/router';

import { AfterViewInit, Component, HostListener, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BibileBookList } from '../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../shared/services/bible.service';
import { BreakpointService } from '../../shared/services/breakpoint.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent implements AfterViewInit, OnInit, OnDestroy, OnChanges {
  currentBook!: BibileBookList;
  @ViewChild('drawer') drawer!: MatDrawer;
  isMobile!: boolean;
  isTablet!: boolean
  isDrawerOpen: boolean = false;
  isToggleClick: boolean = false;
  isHomePage: boolean = false;
  subscription: Subscription[] = [];

  constructor(private bibleService: BibleService, private breakpointService: BreakpointService,
    private router: Router, private renderer: Renderer2
  ) {
    this.breakpointService.isMobile$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.changeTheme(this.router.url)
    this.breakpointService.isTablet$.subscribe(isTablet => {
      this.isTablet = isTablet;
    });
  }


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.enterFullscreen();
    this.trackRouter();
  }

  ngOnChanges(changes: SimpleChanges): void { }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const header = document.getElementById('app-header');
    if (header) {
      if (scrollTop > 320) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  }

  trackRouter() {
    this.subscription.push(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.changeTheme(event.url);
      }
    }))
  }

  changeTheme(url: string) {
    const ele = document.getElementById('bodySection');
    if (url.includes('home')) {
      this.renderer.removeClass(document.body, 'dark-bg-primary');
      this.isHomePage = false;
      if (ele?.classList.contains('body-section')) {
        ele?.classList.remove('body-section')
      }
    } else {
      this.isHomePage = true;
      ele?.classList.add('body-section')
      this.renderer.addClass(document.body, 'dark-bg-primary');
    }
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
