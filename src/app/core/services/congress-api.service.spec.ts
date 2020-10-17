import { TestBed } from '@angular/core/testing';

import { CongressApiService } from './congress-api.service';

describe('CongressApiService', () => {
  let service: CongressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
