import { Component, OnInit } from '@angular/core';
import { CongressMembersService } from 'src/app/shared/services/congress-members.service';
@Component({
  selector: 'slr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private congressService: CongressMembersService) { }

  ngOnInit(): void {
    this.congressService.getCongressMembers(116, "senate")
      .subscribe(res => console.log(res));
  }

}
