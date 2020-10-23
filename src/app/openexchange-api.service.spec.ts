import { TestBed } from '@angular/core/testing';

import { OpenexchangeApiService } from './openexchange-api.service';

describe('OpenexchangeApiService', () => {
  let service: OpenexchangeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenexchangeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
