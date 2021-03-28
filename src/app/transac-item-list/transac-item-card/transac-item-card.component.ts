import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transac-item-card',
  templateUrl: './transac-item-card.component.html',
  styleUrls: ['./transac-item-card.component.css'],
})
export class TransacItemCardComponent implements OnInit {
  @Input() isIncome: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
