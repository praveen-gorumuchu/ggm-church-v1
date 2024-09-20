import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuickAccessActions } from '../models/bible-books/quick-access.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getBookId(curentBook: string, action: QuickAccessActions): string {
    const parts = curentBook.split('book'); // Split the string by 'book'
    let bookNumber = parseInt(parts[1], 10); // Extract the number after 'book'
    // Handle next or previous
    if (action === QuickAccessActions.NEXT) {
      if (bookNumber < 66) {
        bookNumber++; // Increment for next
      } else {
        bookNumber = 1; // Wrap around to book 1 if the number exceeds 66
      }
    } else if (action === QuickAccessActions.PREV) {
      if (bookNumber > 1) {
        bookNumber--; // Decrement for previous
      } else {
        bookNumber = 66; // Wrap around to book 66 if the number goes below 1
      }
    }

    return `book${bookNumber}`;
  }


  destroy(subs: Subscription[]) {
    if (subs && subs.length > 0) {
      subs.forEach((sub: Subscription) => sub.unsubscribe);
    }
  }
}
