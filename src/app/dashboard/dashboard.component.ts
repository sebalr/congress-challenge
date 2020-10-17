import { Component, OnInit } from '@angular/core';
import { CongressMembersService } from 'src/app/shared/services/congress-members.service';
import { ICongressMember } from '../shared/interfaces/congress-member.interface';
@Component({
  selector: 'slr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private congressList: Array<ICongressMember>;
  public filteredCongressList: Array<ICongressMember>;

  constructor(private congressService: CongressMembersService) {
    this.congressList = new Array();
    this.filteredCongressList = new Array();
  }

  ngOnInit(): void {
    this.congressService.getCongressMembers(116, "senate")
      .subscribe(res => {
        this.congressList = res.members;
        this.filteredCongressList = res.members;
      });
  }

}
