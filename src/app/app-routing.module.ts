import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';

const routes: Routes = [
  {path:"", component:CurrenciesListComponent},
  {path:"add-currency", component:AddCurrencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
