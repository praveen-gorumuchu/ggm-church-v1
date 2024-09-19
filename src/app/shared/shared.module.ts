import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleBooksComponent } from './components/bible-books/bible-books.component';

import {MatSidenavModule} from '@angular/material/sidenav';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BibleService } from './services/bible.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { provideHttpClient } from '@angular/common/http';

const materialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule
]

@NgModule({
  declarations: [
    BibleBooksComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules
  ],
  providers: [
    provideHttpClient()
  ]
})
export class SharedModule { }
