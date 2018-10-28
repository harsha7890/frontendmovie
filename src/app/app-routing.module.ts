import { DeleteComponent } from './body/delete/delete.component';
import { UpdateComponent } from './body/update/update.component';
import { ListComponent } from './body/list/list.component';
import { SmartbodyComponent } from './body/smartbody/smartbody.component';
import { DetailsComponent } from './body/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'cards/:movie',component:SmartbodyComponent},
  {path:'viewlist',component:ListComponent},
  {path:'update/:movie',component:UpdateComponent},
  {path:'delete/:movie',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
