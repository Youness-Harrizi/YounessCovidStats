import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  date: any;
  description: string;
  amount: number;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
  }



}
