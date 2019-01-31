import { TestBed, inject } from '@angular/core/testing';

import { ResolveCurrencyService } from './resolve-currency.service';

describe('ResolveCurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveCurrencyService]
    });
  });

  it('should be created', inject([ResolveCurrencyService], (service: ResolveCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
