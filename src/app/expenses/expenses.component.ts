import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';
import { User } from '../user.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  user: User;
  expenses: Expense[];
  totalAmount: number;
  lastUpdated: any;

  constructor(public expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.user = this.expensesService.getUser();

  }

}
