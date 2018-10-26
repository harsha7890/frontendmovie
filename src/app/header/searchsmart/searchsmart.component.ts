import { Router } from '@angular/router';
import { Results } from './../../movie';
import { SearchdataService } from './../searchdata.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Movies } from '../../movie';

@Component({
  selector: 'app-searchsmart',
  templateUrl: './searchsmart.component.html',
  styleUrls: ['./searchsmart.component.css']
})
export class SearchsmartComponent implements OnInit {

public movies : Movies={
  page:1,
  results:[],
  total_results:1,
  total_pages:1
};
  constructor(private searchdataService: SearchdataService,private router: Router) { }
  ngOnInit() {
   
  }
  
  searchbox="";
  onReceiving(searchmovie:string){
    this.searchbox=searchmovie;
    // this.searchdataService.getMovies(this.searchbox).subscribe(data => this.movies = data)
   this.searchdataService.setMovie(this.searchbox);
    this.router.navigate(["cards", this.searchbox]);
  }
}
