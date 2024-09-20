import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BibeBookType, BibileBookList, BibleBook, BibleBookTypes } from '../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../shared/services/bible.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  bibleBooks!: BibleBookTypes[];
  type = BibeBookType;
  activeMenu!: BibileBookList;
  currentBook!: BibleBook;
  @Output() bibleBook = new EventEmitter<BibileBookList>();

  constructor(private bibleService: BibleService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getBibleBooks();
  }


  onClickBook(book: BibileBookList, data: BibleBookTypes) {
    this.bibleService.resetDeafualts();
    this.bibleService.getBook(book.id);
    this.activeMenu = book
    this.bibleBook.emit(book);
    this.bibleService.setChapterIndex(1);
    this.bibleService.setBibleState({
      showBook: true,
      showChapter: false,
      showVerses: false
    })
  }

  isActive(book: BibileBookList): boolean {
    return this.activeMenu.id === book.id
    // return this.activeMenu.name === book.name;
  }


  getBibleBooks() {
    this.bibleService.bibleBooksObsCast.subscribe((data: BibleBookTypes[]) => {
      if (data.length > 0) {
        this.bibleBooks = data;
        this.activeMenu = this.bibleBooks[0].books[0]
      }
    })
  }
}
