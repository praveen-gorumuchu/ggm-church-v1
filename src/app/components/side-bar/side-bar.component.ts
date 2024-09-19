import { Component, Output, EventEmitter } from '@angular/core';
import { BibeBookType, BibileBookList, BibleBook, BibleBookTypes } from '../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../shared/services/bible.service';

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


  constructor(private bibleService: BibleService) { }

  ngOnInit(): void {
    this.getBibleBooks();

  }


  onClickBook(book: BibileBookList, data: BibleBookTypes) {
    this.bibleService.getBook(book.id);
    this.activeMenu = book
    this.bibleBook.emit(book);
    this.bibleService.setSideBarStatus(1);
  }

  isActive(book: BibileBookList): boolean {
    return this.activeMenu.id === book.id
    // return this.activeMenu.name === book.name;
  }


  getBibleBooks() {
    this.bibleService.bibleBooksObsCast.subscribe((data: BibleBookTypes[]) => {
      console.log(data);
      if (data.length > 0) {
        this.bibleBooks = data;
        this.activeMenu = this.bibleBooks[0].books[0]
      }
    })
  }
}
