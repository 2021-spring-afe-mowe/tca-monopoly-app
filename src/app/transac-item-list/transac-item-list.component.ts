import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MoneyItem } from 'src/shared/models/money-item.model';

@Component({
  selector: 'app-transac-item-list',
  templateUrl: './transac-item-list.component.html',
  styleUrls: ['./transac-item-list.component.css'],
})
export class TransacItemListComponent implements OnInit {
  @Input() moneyItems: MoneyItem[];
  @Output() delete: EventEmitter<MoneyItem> = new EventEmitter<MoneyItem>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: MoneyItem) {
    this.delete.emit(item);
  }
}
