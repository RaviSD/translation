import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { CurrencyPipe } from './cutom-pipe/currency.pipe';
import { FormsModule } from '@angular/forms';
import { CurrencyStorageService } from './shared-service/currency-storage.service';
import { ResolveCurrencyService } from './shared-service/resolve-currency.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',
        component: AppComponent,
        resolve : { currencyRes: ResolveCurrencyService    }
    }
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CurrencyStorageService,
    ResolveCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
