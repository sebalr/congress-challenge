import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableHeaderComponent } from './components/table/table-header/table-header.component';
import { TableRowComponent } from './components/table/table-row/table-row.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    TableComponent,
    TableRowComponent,
    TableHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TableRowComponent,
    TableHeaderComponent
  ],
})
export class SharedModule { }
