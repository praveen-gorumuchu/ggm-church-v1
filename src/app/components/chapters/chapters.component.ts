import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BibleBook, ChapterList } from '../../shared/models/bible-books/bible-books.model';
import { BibleService } from '../../shared/services/bible.service';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnChanges, OnInit {
  @Input() currentBook!: BibleBook;
  @Output() currentChapter = new EventEmitter<ChapterList>();
  isActiveChapter!: ChapterList;

  constructor(private bibleService: BibleService) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isActiveChapter = this.currentBook.chapters[0];
  }

  isActive(data: ChapterList) {
    return this.isActiveChapter.id.toLowerCase() === data.id.toLowerCase();
  }

  onChapterClick(data: ChapterList) {
    this.currentChapter.emit(data);
    this.isActiveChapter = data;
    let index = data.name.match(/\d+$/);
    this.bibleService.setSideBarStatus(index ? parseInt(index[0]) : 1);
  }
}
