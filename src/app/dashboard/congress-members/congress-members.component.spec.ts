import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CongressMembersService } from 'src/app/shared/services/congress-members.service';

import { CongressMembersComponent } from './congress-members.component';

describe('CongressMembersComponent', () => {
  let component: CongressMembersComponent;
  let fixture: ComponentFixture<CongressMembersComponent>;
  const mockService = jasmine.createSpyObj('service', ['getCongressMembers']);
  mockService.getCongressMembers.and.returnValue(of({ members: [] }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CongressMembersComponent],
      providers: [{ provide: CongressMembersService, useValue: mockService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve members on init', () => {
    expect(mockService.getCongressMembers)
      .toHaveBeenCalled();
  });

});
