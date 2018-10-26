import { SearchdataService } from './../../header/searchdata.service';
import { Movies } from './../../movie';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) {

   }
public movie : Movies={
    page:1,
    results:[],
    total_results:1,
    total_pages:1
  };
  @Input() movies:Movies;
  ngOnInit() {
   
  }
  
  
}
