
import { Component } from '@angular/core';
import { CardsConstant, CardsModel } from '../../../shared/constants/cards.constant';
import { Route, Router } from '@angular/router';
import { StringConstant } from '../../../shared/constants/string-constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardsList: CardsModel[] = CardsConstant;
  title = StringConstant.title;

  constructor(private router: Router) { }

  onCardClick(data: CardsModel) {
    this.router.navigate(['/', data.path])
  }
}
