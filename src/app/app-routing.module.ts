import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';

const routes: Routes = [
  {path:"currencies", component:CurrenciesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
