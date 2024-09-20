
import { SharedService } from './../../../shared/services/shared.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BibeBookType, BibleBook, ChapterList } from '../../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../../shared/services/bible.service';
import { StringConstant } from '../../../shared/constants/string-constant';
import { QuickAccessActions } from '../../../shared/models/bible-books/quick-access.model';
import { ZoomService } from '../../../shared/services/zoom.service';
import { KeyboardShortcutsService } from '../../../shared/services/key-board-shortcut.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  currentBook!: BibleBook;
  type = BibeBookType;
  currentChapterIndex = 1;
  currentChapter!: ChapterList;
  subscriptions: Subscription[] = [];
  isLoading: boolean;


  constructor(private bibleService: BibleService, private sharedService: SharedService,
    private zoomService: ZoomService, private keyboardShortcutsService: KeyboardShortcutsService
  ) {
    this.isLoading = true;
    this.bibleService.getBook(StringConstant.BOOK_1);
  }

  ngOnInit(): void {
    this.getBibleBooks();

  }


  ngAfterViewInit(): void { }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const header = document.getElementById('app-header');
    if (header) {
      if (scrollTop > 320) {
        header.classList.add('sticky');
        this.bibleService.setBibleState({ showBook: true, showChapter: true, showVerses: true });
      } else {
        header.classList.remove('sticky');
        this.bibleService.setBibleState({ showBook: true, showChapter: false, showVerses: false });
      }
    }
  }

  zoom(sign: string) {
    if (sign === '+') this.zoomService.zoomIn();
    else if (sign === '-') this.zoomService.zoomOut();
    else this.zoomService.reset();
  }

  getBibleBooks() {
    this.subscriptions.push(
      this.bibleService.currentBookObsCast.subscribe((data: BibleBook) => {
        this.isLoading = false
        this.currentBook = data;
        this.currentChapter = this.currentBook.chapters[0];
        this.bibleService.setBibleState({ showBook: true });
      }, () => this.isLoading = false),
      // this.bibleService.chapterIndexObsCast.subscribe((index: number) => {
      //   this.currentChapterIndex = index;
      // })
    )
  }

  changeChapter(action: QuickAccessActions) {
    switch (action) {
      case QuickAccessActions.NEXT:
        if ((this.currentChapterIndex >= this.currentBook.chapters.length)) {
          this.callToNewBook(action);
        } else {
          this.currentChapter = this.currentBook.chapters[this.currentChapterIndex];
          this.currentChapterIndex++;
        }

        break;

      case QuickAccessActions.PREV:
        if (this.currentChapterIndex > 1) {

          this.currentChapterIndex--;
          this.currentChapter = this.currentBook.chapters[this.currentChapterIndex - 1];
        } else {
          this.callToNewBook(action);
        }
        break;

      default:
        break;
    }
    this.bibleService.setChapterIndex(this.currentChapterIndex)

  }

  callToNewBook(action: QuickAccessActions) {
    this.resetDefaults();
    this.isLoading = true;
    const newBookId = this.sharedService.getBookId(this.currentBook.id, action);
    this.bibleService.getBook(newBookId);
  }


  resetDefaults() {
    this.currentChapterIndex = 1;
    this.bibleService.setChapterIndex(1);

  }

  getCurrentChapter(data: ChapterList) {
    this.currentChapter = data;
    this.bibleService.setBibleState({
      showBook: true, showChapter: false
    })
  }


  onMouseUp() {
    const selectionData = this.keyboardShortcutsService.getSelectedTextData();
    if (selectionData) {
        const { startIndex, endIndex } = selectionData;

        // Adjust indices for inclusivity
        if (startIndex >= 0 && endIndex >= 0) {
            // Ensure indices are in correct order
            const minIndex = Math.min(startIndex, endIndex);
            const maxIndex = Math.max(startIndex, endIndex);
            const selectedVerses = this.currentChapter.verses.slice(minIndex, maxIndex + 1);
            console.log('Selected Verses:', selectedVerses);
        } else {
            console.warn('Invalid indices');
        }
    } else {
        console.warn('No text selected');
    }
  }


  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '=')) {
      event.preventDefault();
      this.zoomService.zoomIn();
    } else if ((event.ctrlKey || event.metaKey) && event.key === '-') {
      event.preventDefault();
      this.zoomService.zoomOut();
    }
  }

  ngOnDestroy(): void {
    this.bibleService.resetDeafualts();
    this.sharedService.destroy(this.subscriptions);
    window.removeEventListener('keydown', this.onKeydown.bind(this));
  }
}
