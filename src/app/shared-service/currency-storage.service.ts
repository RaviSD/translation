import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class CurrencyStorageService {
  liveData;
   constructor(private http: HttpClient) {

    }

    public getCurrencyRate(): Observable<any> {
        return this.http.get(environment.CURRENCY_ENDPOINT)
    }

    getData(){
      return this.liveData;
    }

    setData(data){
      this.liveData = data;
    }
  }