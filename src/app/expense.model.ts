export class Expense{
    date: Date;
    description: string;
    amount: number;

    constructor(date: Date,
        description: string,
        amount: number){
            this.date = date;
            this.description = description;
            this.amount = amount;
        }
}