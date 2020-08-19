import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItemCardComponent } from '../budget-item-list/budget-item-card/budget-item-card.component';
import {BudgetItem} from '../../shared/models/budget-item.model';
@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }
  isNewItem: boolean;
  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  onSubmit(form: NgForm): void {
    this.formItem.emit(form.value);
  }
}
