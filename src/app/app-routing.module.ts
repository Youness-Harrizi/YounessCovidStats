import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ExpensesComponent } from './expenses/expenses.component';
import { SecurePagesGuard } from './secure-pages.guard';
import { SigninComponent } from './signin/signin.component';
import {CovidPageComponent} from './covid-page/covid-page.component';
import{CountriesComponent} from './countries/countries.component';


const routes: Routes = [
  { path: "signin", component: SigninComponent,
  canActivate: [SecurePagesGuard]},
  { path: "signout", component: ExpensesComponent,
  canActivate: [AuthGuard]},
  { path: "covid", component: CovidPageComponent,
  canActivate: [AuthGuard]},
  { path: "countries", component: CountriesComponent,
  canActivate: [AuthGuard]},
  { path: "", pathMatch: "full", redirectTo: "signin"},
  {path:"covid",redirectTo:"covid"},
  {path:"countries",redirectTo:"countries"},
  { path: "**", redirectTo: "signout"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
