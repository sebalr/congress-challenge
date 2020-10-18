import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'slr-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRowComponent implements OnInit {

  @Input() public element: any;
  @Output() public elementSelected = new EventEmitter<any>();

  @HostListener('click')
  elementClicked(): void {
    this.elementSelected.emit(this.element);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
