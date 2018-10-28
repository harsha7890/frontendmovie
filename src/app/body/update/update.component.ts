import { AddserviceService } from './../addservice.service';
import { moviedb } from './../../moviedb';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route:ActivatedRoute,private addserviceservice:AddserviceService) { }
  movies;
  ngOnInit() {
    
  }
  
 


}
