import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BibleService } from '../../shared/services/bible.service';
import { BibleBook, ChapterList } from '../../shared/models/bible-books/bible-books.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleDrawer = new EventEmitter<void>();
  currentBook!: BibleBook;
  currentChapter!: ChapterList;
  @Input() isSticky = false;
  currentChapterIndex = 1;
  constructor(private bibleService: BibleService) {

  }

  ngOnInit(): void {
    this.getBibleBooks();

  }

  getBibleBooks() {
    this.bibleService.currentBookObsCast.subscribe((data: BibleBook) => {
      this.currentBook = data;
      this.currentChapter = this.currentBook.chapters[0];
      console.log(this.currentBook);
    })
    this.bibleService.chapterIndexObsCast.subscribe((index: number) => {
      this.currentChapterIndex = index;
    })
  }

  ngOnDestroy(): void {
    this.bibleService.destory();
  }

}
