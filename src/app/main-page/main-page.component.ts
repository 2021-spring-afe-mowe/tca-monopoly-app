import { Component, OnInit } from '@angular/core';
import { MoneyItem } from 'src/shared/models/money-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  moneyItems: MoneyItem[] = new Array<MoneyItem>();
  totalMoney: number = 1500;

  constructor() {}

  ngOnInit(): void {}

  addItems(newItem: MoneyItem) {
    this.moneyItems.push(newItem);
    this.totalMoney += newItem.amount;
  }

  deleteItem(item: MoneyItem) {
    let index = this.moneyItems.indexOf(item);
    this.moneyItems.splice(index, 1);
    this.totalMoney -= item.amount;
  }

  updateItem(UpdateEvent:) {}
}
