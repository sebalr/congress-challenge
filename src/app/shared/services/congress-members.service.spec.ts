import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CongressApiService } from 'src/app/core/services/congress-api.service';

import { CongressMembersService } from './congress-members.service';

describe('CongressMembersService', () => {
  let service: CongressMembersService;
  const apiService = jasmine.createSpy();
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: CongressApiService, useValue: apiService }]
    });
    service = TestBed.inject(CongressMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
