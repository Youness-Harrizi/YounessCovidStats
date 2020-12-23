import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './signin/signin.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { CovidPageComponent } from './covid-page/covid-page.component';
import {HttpClientModule}  from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ExpensesComponent,
    AddExpensesComponent,
    CovidPageComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
