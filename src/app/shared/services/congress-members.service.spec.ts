import { TestBed } from '@angular/core/testing';

import { CongressMembersService } from './congress-members.service';

describe('CongressMembersService', () => {
  let service: CongressMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongressMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
