import { debounceTime, Subject } from 'rxjs';
import { SearchRequest } from '../../../shared/models/search-request.model';
import { SearchBookService } from './../../../shared/services/search-book.service';
import { Component, ElementRef, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BibileBookList, BibleBooksModel, BibleBookTypes } from '../../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../../shared/services/bible.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {
  searchQuery: string = '';
  bibleBooks: BibileBookList[] = [];
  @ViewChild('searchInput') searchInput!: NgModel;

  // private keydownListener: (event: KeyboardEvent) => void;

  constructor(private searchBookService: SearchBookService,
    private bibleService: BibleService, private ngZone: NgZone
  ) {
    // this.keydownListener = this.onKeydown.bind(this);
    // window.addEventListener('keydown', this.keydownListener);
  }

  ngOnInit(): void {
    this.bibleService.bibleBooksObsCast.subscribe((books: BibleBookTypes[]) => {
      this.ngZone.run(() => {
        this.bibleBooks = this.combineBibleBooks(books);

      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void { }

  onSearchChange(query: any) {

  }
  combineBibleBooks(bibleBooks: BibleBookTypes[]): BibileBookList[] {
    return bibleBooks.reduce<BibileBookList[]>((accumulator, current) => {
      return accumulator.concat(current.books);
    }, []);
  }


  onSearchClick() {
    console.log(this.searchQuery, 'original')
    const searchObj: SearchRequest | null = this.searchBookService.searchBook(this.searchQuery);
    if (searchObj && searchObj.bookName) {
      const bookName = this.bibleBooks.find((data: BibileBookList) =>
        data.name.includes(searchObj?.bookName));
      if (bookName && bookName.id) {
        const chapterIdx = searchObj && searchObj.chapterNumber && Number(searchObj.chapterNumber) || 1;
        const verseIdx = searchObj && searchObj.verse && Number(searchObj.verse) || 1;
        this.bibleService.getBook(bookName.id, false, chapterIdx, verseIdx);
        console.log(searchObj, bookName.id, false, chapterIdx, verseIdx, 'search found');
        this.resetInput();

      }
      this.resetInput();

    }
    console.log(searchObj, 'Try agian');

  }

  resetInput(): void {
    if (this.searchInput && this.searchQuery) {
      this.searchQuery = '';
      this.searchInput.control.reset();
      this.searchInput.control.markAllAsTouched();
    }
  }

  onKeydown(event: KeyboardEvent) {
    const { ctrlKey, key } = event;

    if (ctrlKey && key === 'f') {
      event.preventDefault(); // Prevent the default browser search

    }
  }

  ngOnDestroy(): void {
    // window.removeEventListener('keydown', this.keydownListener);
  }



}
