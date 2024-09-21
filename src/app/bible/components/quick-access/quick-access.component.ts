import { BibleService } from './../../../shared/services/bible.service';
import { SharedService } from './../../../shared/services/shared.service';
import { ZoomService } from './../../../shared/services/zoom.service';
import { Component, Output, EventEmitter, OnInit, OnDestroy, Input, NgZone, HostListener } from '@angular/core';
import { QuickAccessActions } from '../../../shared/models/bible-books/quick-access.model';
import { BookMarkService } from '../../../shared/services/bookmark.service';
import { BookmarkListModel } from '../../../shared/models/bible-books/bible-books.model';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent implements OnInit, OnDestroy {
  @Output() changeChapter = new EventEmitter<QuickAccessActions>();
  @Input() disableNext: boolean = false;
  @Input() disablePrev: boolean = false;
  action = QuickAccessActions;
  showLeftArrow!: boolean;
  showRightArrow!: boolean;
  bookMarkList: BookmarkListModel[] = [];
  constructor(private ngZone: NgZone, private bookMarkService: BookMarkService,
    private sharedService: SharedService, private bibleService: BibleService) { }

  ngOnInit(): void {
    this.getBookMarks();
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    });
  }

  getBookMarks() {
    this.bookMarkService.bookMarksListObsCast.subscribe((data: BookmarkListModel[]) => {
      const bookMarks: BookmarkListModel[] = this.bookMarkService.getBookMarks();
      this.bookMarkList = this.bookMarkService.sortBookmarks(bookMarks);
    })
  }

  onBookMarkClick(data: BookmarkListModel) {
    this.bookMarkService.setBookMarkClicked(data);
    this.bibleService.getBook(data.currentBookId, true);
  }

  getChapterNumber(chapter: string): number | null {
    return this.sharedService.getIndex(chapter);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { clientX } = event;
    const viewportWidth = window.innerWidth;
    this.showLeftArrow = clientX < 60;
    this.showRightArrow = clientX > viewportWidth - 60;
  }


  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.ngZone.run(() => {
        this.onChangeChapter(QuickAccessActions.NEXT);
      });
    } else if (event.key === 'ArrowLeft') {
      this.ngZone.run(() => {
        this.onChangeChapter(QuickAccessActions.PREV);
      });
    }
  }

  deleteAll() {
    this.bookMarkService.clearAll();
    this.bookMarkList = [];
  }

  onChangeChapter(action: QuickAccessActions) {
    this.changeChapter.emit(action);
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));

  }
}
