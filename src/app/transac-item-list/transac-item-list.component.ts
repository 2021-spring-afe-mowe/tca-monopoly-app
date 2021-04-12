import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MoneyItem } from 'src/shared/models/money-item.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-transac-item-list',
  templateUrl: './transac-item-list.component.html',
  styleUrls: ['./transac-item-list.component.css'],
})

export interface UpdateEvent {
  old: MoneyItem
  new: MoneyItem
}

export class TransacItemListComponent implements OnInit {
  @Input() moneyItems: MoneyItem[];
  @Output() delete: EventEmitter<MoneyItem> = new EventEmitter<MoneyItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<UpdateEvent>()

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDelete(item: MoneyItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: MoneyItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        })
      }
    });
  }
}
