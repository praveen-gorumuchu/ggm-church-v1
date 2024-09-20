import { ZoomService } from './../../../shared/services/zoom.service';
import { Component, Output, EventEmitter, OnInit, OnDestroy, Input, NgZone, HostListener } from '@angular/core';
import { QuickAccessActions } from '../../../shared/models/bible-books/quick-access.model';

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

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    });
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




  onChangeChapter(action: QuickAccessActions) {
    this.changeChapter.emit(action);
  }


  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));

  }
}
