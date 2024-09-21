import { Router } from '@angular/router';
import { SharedService } from './../../shared/services/shared.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BibleService } from '../../shared/services/bible.service';
import { BibleBook, ChapterList } from '../../shared/models/bible-books/bible-books.model';
import { Subscription } from 'rxjs';
import { MenuList, MenuListModel } from '../../shared/constants/menu-list';
import { BibleStateModel } from '../../shared/models/bible.state.model';
import { BreakpointService } from '../../shared/services/breakpoint.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleDrawer = new EventEmitter<void>();
  currentBook!: BibleBook;
  currentChapter!: ChapterList;
  currentChapterIndex = 1;
  subscription: Subscription[] = [];
  menuList: MenuListModel[] = [];
  activeMenu!: MenuListModel;
  bibleState!: BibleStateModel;
  showBook = false;
  showChapterIndex = false;
  showVerses = false;
  isMobile: boolean = false;
  isTablet: boolean = false;

  constructor(private bibleService: BibleService, private sharedService: SharedService,
    private router: Router, private breakpointService:BreakpointService ) {
      this.breakpointService.isMobile$.subscribe(isMobile => {
        this.isMobile = isMobile;
      });
  
      this.breakpointService.isTablet$.subscribe(isTablet => {
        this.isTablet = isTablet;
      });
     }

  ngOnInit(): void {
    this.getBibleBooks();
    this.menuList = MenuList;
    this.activeMenu = this.menuList[0];

  }

  isActiveMenu(book: MenuListModel): boolean {
    return this.activeMenu.name === book.name
  }

  onMenuClick(menu: MenuListModel) {
    this.router.navigate(['/', menu.url])
    this.activeMenu = menu;
  }

  onLogoClick() {
    this.router.navigate(['/', 'home']);
    this.activeMenu = this.menuList[0];
    this.bibleService.resetDeafualts();
    this.showBook = false;
  }

  resetDefaults() {
    this.bibleService.setChapterIndex(1);
    this.bibleService.setChapterIndex(1);
  }

  getBibleBooks() {
    this.subscription.push(
      this.bibleService.currentBookObsCast.subscribe((data: BibleBook) => {
        this.currentBook = data;
        this.currentChapter = this.currentBook.chapters[0];
        console.log(this.currentBook);
      }),
      this.bibleService.chapterIndexObsCast.subscribe((index: number) => {
        this.currentChapterIndex = index;
      }),
      this.bibleService.isShowObasCast.subscribe((data: BibleStateModel) => {
        this.bibleState = data;
        this.showBook = this.bibleState.showBook || false;
        this.showChapterIndex = this.bibleState.showChapter || false;
        this.showVerses = this.bibleState.showVerses || false;
      })
    )


  }

  ngOnDestroy(): void {
    this.showBook = false;
    this.showChapterIndex = false;
    this.showVerses = false;
    this.isMobile = false;
    this.isTablet= false;
  }

}
