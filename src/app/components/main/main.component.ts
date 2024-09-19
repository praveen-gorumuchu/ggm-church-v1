import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BibeBookType, BibleBook, ChapterList } from '../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../shared/services/bible.service';
import { StringConstant } from '../../shared/constants/string-constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  currentBook!: BibleBook;
  type = BibeBookType;
  currentChapterIndex = 1;
  currentChapter!: ChapterList;
  subscriptions: Subscription[] = [];
  constructor(private bibleService: BibleService) {
    this.bibleService.getBook(StringConstant.BOOK_1);
  }

  ngOnInit(): void {
    this.getBibleBooks();
  }

  getBibleBooks() {
   this.subscriptions.push(
    this.bibleService.currentBookObsCast.subscribe((data: BibleBook) => {
      this.currentBook = data;
      this.currentChapter = this.currentBook.chapters[0];
    }),
    this.bibleService.chapterIndexObsCast.subscribe((index: number) => {
      this.currentChapterIndex = index;
    })
   )
  }

  getCurrentChapter(data: ChapterList) {
    this.currentChapter = data;
  }

  ngOnDestroy(): void {
      this.bibleService.destory();
  }
}
