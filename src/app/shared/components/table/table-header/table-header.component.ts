import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'slr-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
