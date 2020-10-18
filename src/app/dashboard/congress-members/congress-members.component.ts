import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  public filteredCongressList: Array<CongressMemberModel>;

  constructor(private congressService: CongressMembersService) {
    this.congressList = new Array();
    this.filteredCongressList = new Array();
  }

  ngOnInit(): void {
    this.getCongressMembers();
    this.initSearchInputs();
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
      ).subscribe(value =>
        this.filteredCongressList = this.congressList.filter(x => x.toString().includes(value))
      )
    );
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
