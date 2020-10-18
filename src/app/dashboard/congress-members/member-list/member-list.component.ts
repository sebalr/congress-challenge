import { Component, Input, OnInit } from '@angular/core';
import { ICongressMember } from 'src/app/shared/interfaces/congress-member.interface';

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

  constructor() { }

  ngOnInit(): void {
  }

}
