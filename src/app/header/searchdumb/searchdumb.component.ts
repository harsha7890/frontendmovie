import { DetailsComponent } from './../../body/details/details.component';
import { Movies } from './../../movie';
import { Router } from '@angular/router';
import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-searchdumb',
  templateUrl: './searchdumb.component.html',
  styleUrls: ['./searchdumb.component.css']
})
export class SearchdumbComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  searchbox="";
  @Output() sendToParent =new EventEmitter<string>();
  search(){
    this.sendToParent.emit(this.searchbox);
  }
  
}
