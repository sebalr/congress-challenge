import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'slr-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
