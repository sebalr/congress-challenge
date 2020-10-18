import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICongressMember } from 'src/app/shared/interfaces/congress-member.interface';
import { CongressMemberModel } from 'src/app/shared/models/congress-member.model';

@Component({
  selector: 'slr-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @Input() public congressMembersList: Array<ICongressMember>;

  public readonly trackByCongress = (index: number, member: ICongressMember) => {
    return member.id;
  }

  constructor(private router: Router) { }

  public memberClicked(memer: CongressMemberModel): void {
    this.router.navigate(['/detail', memer.id]);
  }


  ngOnInit(): void {
  }

}
