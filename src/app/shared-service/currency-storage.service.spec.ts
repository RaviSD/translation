import { TestBed, inject } from '@angular/core/testing';

import { CurrencyStorageService } from './currency-storage.service';

describe('CurrencyStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyStorageService]
    });
  });

  it('should be created', inject([CurrencyStorageService], (service: CurrencyStorageService) => {
    expect(service).toBeTruthy();
  }));
});
