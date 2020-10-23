import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { OpenexchangeApiService } from '../openexchange-api.service';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.sass']
})
export class AddCurrencyComponent implements OnInit {
  apiCurrency;
  currencyForm;

  constructor(
    private exchangeApiService: OpenexchangeApiService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.currencyForm = this.formBuilder.group({
      selectedCurrency:'',
    })
  }

  ngOnInit() {
    this.apiCurrency = this.exchangeApiService.getAPICurrencies();
  }

  checkInclude

  onSubmit(input) {
    if (!this.exchangeApiService.getCurrencyList().includes(input.selectedCurrency))
    this.exchangeApiService.addCurrency(input.selectedCurrency);
    this.currencyForm.reset();
    this.router.navigate([''])
  }
}
