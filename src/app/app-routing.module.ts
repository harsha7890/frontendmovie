import { SmartbodyComponent } from './body/smartbody/smartbody.component';
import { DetailsComponent } from './body/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'cards/:movie',component:SmartbodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
