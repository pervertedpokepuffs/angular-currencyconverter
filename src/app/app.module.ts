import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AddCurrencyComponent } from './add-currency/add-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CurrenciesListComponent,
    AddCurrencyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
