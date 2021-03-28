import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoneyItem } from 'src/shared/models/money-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: MoneyItem = new MoneyItem('', null);

  @Output() formSubmit: EventEmitter<MoneyItem> = new EventEmitter<MoneyItem>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
  }
}
