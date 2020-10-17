import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'slr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
