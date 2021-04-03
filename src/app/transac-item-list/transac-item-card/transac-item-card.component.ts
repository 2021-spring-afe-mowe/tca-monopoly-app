import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MoneyItem } from 'src/shared/models/money-item.model';

@Component({
  selector: 'app-transac-item-card',
  templateUrl: './transac-item-card.component.html',
  styleUrls: ['./transac-item-card.component.css'],
})
export class TransacItemCardComponent implements OnInit {
  @Input() item: MoneyItem;
  @Output() entryDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  eraseEntry() {
    this.entryDelete.emit();
  }
}
