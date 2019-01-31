import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyStorageService } from '../shared-service/currency-storage.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Pipe({
  name: 'currency',
  pure: true
})
export class CurrencyPipe implements PipeTransform {
  currencyInfo;
  results: Observable<any>;
  constructor(private currencyStorage: CurrencyStorageService) { }

  transform(
    value: number,
    baseCurrency: string = 'EUR',
    targetCurrency: string = 'USD',
    date: any,
    symbol: string = '$',
    flag: string = 'NO_FLAG',
    decimal: string = '2',
    numberFormat: any = '3'): any {
    this.currencyInfo = this.currencyStorage.getData();
    console.log('IN PIPE this.currencyInfo-->', this.currencyInfo);
    return parseFloat(this.currencyInfo.rates.USD) * value;
  }

}
