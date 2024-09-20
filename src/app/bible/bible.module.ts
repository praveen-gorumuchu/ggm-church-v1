import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibleRoutingModule } from './bible-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MainComponent } from './components/main/main.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { QuickAccessComponent } from './components/quick-access/quick-access.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const material = [
  MatProgressSpinnerModule,
  MatBottomSheetModule,
  MatCardModule
]

@NgModule({
  declarations: [
    MainComponent,
    ChaptersComponent,
    QuickAccessComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    BibleRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ...material
  ]
})
export class BibleModule { }
