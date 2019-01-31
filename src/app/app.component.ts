import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CurrencyPipe } from './cutom-pipe/currency.pipe';
import { CurrencyStorageService } from './shared-service/currency-storage.service';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyPipe]
})
export class AppComponent implements OnInit {
  amount$: Observable<number>
  // amount = 16;
  currencyInfo;
  constructor(private translate: TranslateService,
  private currencypipe: CurrencyPipe,
private currencyStorageService: CurrencyStorageService) {
    translate.setDefaultLang('en');

    this.currencyStorageService.getCurrencyRate().subscribe(data => {
      this.currencyInfo = data;
      console.log('===app comp this.currencyInfo====>', this.currencyInfo);
      this.currencyStorageService.setData(this.currencyInfo);
    },
      err => {
        // Log errors if any
        console.log(err);
        console.log('@40->');
      });
  }

  ngOnInit() {
  }

  title = 'tr';
  user = {
    name: 'Ravi',
    age: 32
  };

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  onBlurMethod (value: any): any {
    console.log('==VALUE===>', value, this.amount$);
    this.amount$ = this.currencypipe.transform(value,
      'EUR', 'USD', '22-01-2019', '$', 'FLAG', '1', '2');
      console.log('==RETURN===>', this.amount$);
  }
}
