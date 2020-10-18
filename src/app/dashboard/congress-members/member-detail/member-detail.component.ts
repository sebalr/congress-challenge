import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CongressMembersService } from 'src/app/shared/services/congress-members.service';

@Component({
  selector: 'slr-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  public member$;

  constructor(private route: ActivatedRoute, private membersService: CongressMembersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.member$ = this.membersService.getCongressMember(params.id);
    });
  }

}
