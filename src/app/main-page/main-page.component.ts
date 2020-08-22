import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  balance = 0;
  constructor() { }

  ngOnInit(): void {
    this.budgetItems = [{amount: 123, desc: 'bread'}];
    this.balance = 123;
  }


  addItem(item): void {
    this.budgetItems.push(item);
    this.balance += item.amount;
    console.log(this.budgetItems);
  }

  deleteItem(item): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.balance += -item.amount;
  }

  editItem(record): void {
    this.balance -= this.budgetItems[record[0]].amount;
    this.balance += record[1].amount;
    this.budgetItems[record[0]] = record[1];
  }
}
