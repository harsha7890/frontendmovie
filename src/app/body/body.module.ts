import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
// import { HeaderModule } from '../header/header.module';
import {RouterModule,Routes,ActivatedRoute,Router } from '@angular/router';
import { SmartbodyComponent } from './smartbody/smartbody.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    FormsModule
  ],
  exports: [DetailsComponent],
  declarations: [DetailsComponent, SmartbodyComponent, ListComponent, UpdateComponent, DeleteComponent]
})
export class BodyModule { }
