import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CongressApiService } from './congress-api.service';
import { HttpClient } from '@angular/common/http';

describe('CongressApiService', () => {
  let service: CongressApiService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(CongressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
