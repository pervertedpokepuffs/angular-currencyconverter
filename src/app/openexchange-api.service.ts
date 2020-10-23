import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { shareReplay, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OpenexchangeApiService {
  appID = "app_id=d6ced0a885c24eb0b47f270de1b62263";
  currencyList = [];
  apiRates;

  cache: {[k: string]: any} = {};

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.getAPIRates().subscribe((data: any[]) => {
      this.apiRates = data;
    });
  }

  getAPICurrencies() {
    if (!this.cache['apiCurrencies']) {
      this.cache['apiCurrencies'] = this.http.get("https://openexchangerates.org/api/currencies.json").pipe(
        shareReplay(1),
        catchError(err => {
          delete this.cache['apiCurrencies'];
          return EMPTY;
        })
      );
    }

    return this.cache.apiCurrencies;
  }

  addCurrency(currency) {
    this.currencyList.push(currency);
  }

  getCurrencyList() {
    return this.currencyList;
  }

  getAPIRates() {
    const params = new HttpParams({fromString: this.appID})

    if (!this.cache['apiRates']) {
      this.cache['apiRates'] = this.http.get(`https://openexchangerates.org/api/latest.json`, {responseType:'json', params}).pipe(
        shareReplay(1),
        catchError(err => {
          delete this.cache.apiRates;
          return EMPTY;
        })
      );
    }

    return this.cache.apiRates;
  }

  getConvert(value, currFrom, currTo) {
    console.log(this.apiRates);

    let rateFrom = this.apiRates.rates[currFrom];
    let rateTo = this.apiRates.rates[currTo];
    let result = (value/rateFrom)*rateTo;
    let exhangeRate = (1/rateFrom)*rateTo;
    
    return {
      value: result,
      rate: exhangeRate,
    }
      ;
  }
}
