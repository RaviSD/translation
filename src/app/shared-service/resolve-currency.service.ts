import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CurrencyStorageService } from './currency-storage.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ResolveCurrencyService implements Resolve<any> {
  currencyInfo;
  constructor(private currencyStorageService: CurrencyStorageService) { }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.currencyStorageService.getCurrencyRate();
  }
}
