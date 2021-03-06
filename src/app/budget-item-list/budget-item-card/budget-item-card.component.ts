import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {


  @Input() isIncome = false;
  @Input() item: BudgetItem;
  @Output() deleteItem = new EventEmitter();
  @Output() cardClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteItemEmitter(): void {
    this.deleteItem.emit();
  }

  onCardClickEmitter(): void {
    this.cardClick.emit();
  }
}
