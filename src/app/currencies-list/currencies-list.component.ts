import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { OpenexchangeApiService } from '../openexchange-api.service';

@Component({
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.sass']
})
export class CurrenciesListComponent implements OnInit {
  currencyList = [];
  conversionForm;
  apiCurrency;

  constructor(
    private exchangeApiService: OpenexchangeApiService,
    private formBuilder: FormBuilder,
  ) {
    this.conversionForm = this.formBuilder.group({
      value: '',
      selectedCurrency: '',
    })
  }

  ngOnInit() {
    this.apiCurrency = this.exchangeApiService.getAPICurrencies();
    var selectedCurrencies = this.exchangeApiService.getCurrencyList();
    for (var i = 0; i < selectedCurrencies.length; i++)
      this.currencyList.push({
        currency: selectedCurrencies[i],
        value: 0,
        rate: 0,
      });
    
  }

  updateConversion(input) {
    console.log(input);
    if (this.currencyList.length > 0 && input.value && input.selectedCurrency) {
      for (var i = 0; i < this.currencyList.length; i++) {
        let conversion = this.exchangeApiService.getConvert(input.value, input.selectedCurrency, this.currencyList[i].currency);
        this.currencyList[i].value = conversion.value.toFixed(5);
        this.currencyList[i].rate = conversion.rate.toFixed(5);
      }
    }
  }
}
