import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() deleteItem = new EventEmitter();
  @Output() editItem = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItemEmitter(item): void {
   this.deleteItem.emit(item);
  }

  cardClick(item): void {

    const index = this.budgetItems.indexOf(item);
    const dialogRef = this.dialog.open(EditItemModalComponent, { width: '350px', data: item });
    dialogRef.afterClosed().subscribe(res => {
      this.editItem.emit([index, res]);
    })
  }
}
