import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CongressMemberModel } from 'src/app/shared/models/congress-member.model';
import { CongressMembersService } from 'src/app/shared/services/congress-members.service';

@Component({
  selector: 'slr-congress-members',
  templateUrl: './congress-members.component.html',
  styleUrls: ['./congress-members.component.scss']
})
export class CongressMembersComponent implements OnInit, OnDestroy {

  private congressList: Array<CongressMemberModel>;
  private subscriptions = new Subscription();
  public searchInputForm = new FormControl('');
  public nameInputForm = new FormControl('');
  public partyInputForm = new FormControl('');
  public filteredCongressList: Array<CongressMemberModel>;
  public filtersExpanded: boolean;

  constructor(private congressService: CongressMembersService) {
    this.congressList = new Array();
    this.filteredCongressList = new Array();
    this.filtersExpanded = false;
  }

  ngOnInit(): void {
    this.getCongressMembers();
    this.initSearchInputs();
  }

  public toggleFilters(): void {
    this.filtersExpanded = !this.filtersExpanded;
    this.nameInputForm.setValue('');
    this.partyInputForm.setValue('');
    this.filteredCongressList = [...this.congressList];
  }

  private getCongressMembers(): void {
    this.congressService.getCongressMembers(116, 'senate')
      .subscribe(res => {
        this.congressList = res.members.map(x => {
          const model = new CongressMemberModel();
          model.init(x);
          return model;
        });
        this.filteredCongressList = [... this.congressList];
      });
  }

  private initSearchInputs(): void {
    this.subscriptions.add(
      this.searchInputForm.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(value => {
        this.nameInputForm.setValue('', { emitEvent: false });
        this.partyInputForm.setValue('', { emitEvent: false });
        this.filteredCongressList = this.congressList.filter(x => x.toString().includes(value?.toLowerCase()));
      }
      )
    );
    this.subscriptions.add(
      this.nameInputForm.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(value => {
        this.partyInputForm.setValue('', { emitEvent: false });
        this.searchInputForm.setValue('', { emitEvent: false });
        this.filteredCongressList = this.congressList.filter(x => x.fullName().includes(value?.toLowerCase()));
      }
      )
    );
    this.subscriptions.add(
      this.partyInputForm.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(value => {
        this.nameInputForm.setValue('', { emitEvent: false });
        this.searchInputForm.setValue('', { emitEvent: false });
        this.filteredCongressList = this.congressList.filter(x => x.party?.toLowerCase().includes(value?.toLowerCase()));
      }
      )
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
