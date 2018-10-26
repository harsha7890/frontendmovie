import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
// import { HeaderModule } from '../header/header.module';
import {RouterModule,Routes,ActivatedRoute,Router } from '@angular/router';
import { SmartbodyComponent } from './smartbody/smartbody.component'
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [DetailsComponent],
  declarations: [DetailsComponent, SmartbodyComponent]
})
export class BodyModule { }
