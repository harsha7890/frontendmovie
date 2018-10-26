import { BodyModule } from './../body/body.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { SearchdumbComponent } from './searchdumb/searchdumb.component';
import { SearchsmartComponent } from './searchsmart/searchsmart.component';
import {HttpClientModule} from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser'
import { DetailsComponent } from '../body/details/details.component';
import {Router,Routes,RouterModule} from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BodyModule,
    RouterModule
  ],
  exports:[HeadercomponentComponent, SearchdumbComponent, SearchsmartComponent],
  declarations: [HeadercomponentComponent, SearchdumbComponent, SearchsmartComponent]
})
export class HeaderModule { }
