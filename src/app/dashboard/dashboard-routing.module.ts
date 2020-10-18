import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailComponent } from './congress-members/member-detail/member-detail.component';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [{
  path: '',
  component: DashboardComponent
},
{
  path: 'detail/:id',
  component: MemberDetailComponent
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
