import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { BibileBookList } from '../../shared/models/bible-books/bible-books.model';


@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent implements AfterViewInit {
  currentBook!: BibileBookList;
  @ViewChild(MatDrawerContent) scrollableContent!: MatDrawerContent;
  @ViewChild('drawer') drawer!: MatDrawer;
  isSticky = false;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.scrollableContent && this.scrollableContent.getElementRef()) {
      const element = this.scrollableContent.getElementRef().nativeElement;

      // Attach the scroll event listener to mat-drawer-content
      element.addEventListener('scroll', this.onScroll.bind(this));
    }

  }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    console.log('Scroll Position:', scrollTop);

    if (scrollTop > 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  getBibleBook(book: BibileBookList) {
    this.currentBook = book;
    if (this.currentBook) {
      this.drawer.close();
    }
  }

}
