import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(item): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }

  cardClick(item) {
    const index = this.budgetItems.indexOf(item);
    const dialogRef = this.dialog.open(EditItemModalComponent, { width: '350px', data: item })
  }
}
