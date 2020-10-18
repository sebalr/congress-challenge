import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CongressMembersComponent } from 'src/app/dashboard/congress-members/congress-members.component';
import { MemberListComponent } from 'src/app/dashboard/congress-members/member-list/member-list.component';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberDetailComponent } from './congress-members/member-detail/member-detail.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MemberListComponent,
    CongressMembersComponent,
    MemberDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
