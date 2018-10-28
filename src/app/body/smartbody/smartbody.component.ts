import { moviedb } from './../../moviedb';
import { AddserviceService } from './../addservice.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { SearchdataService } from './../../header/searchdata.service';
import { Movies, Results } from './../../movie';
import { DetailsComponent } from './../details/details.component';
import { Component, OnInit, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-smartbody',
  templateUrl: './smartbody.component.html',
  styleUrls: ['./smartbody.component.css']
})
export class SmartbodyComponent implements OnInit {
  @ViewChild(DetailsComponent) details;
  public movies1 : Movies={
    page:1,
    results:[],
    total_results:1,
    total_pages:1
  };
  movies=""; 
  constructor(private searchdataservice:SearchdataService,private route:ActivatedRoute,private router:Router,private addservice: AddserviceService) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{

      let movie=params.get("movie");
       this.movies=movie;
     }
      )
      this.searchdataservice.getMovies(this.movies).subscribe(data => this.movies1 = data);
      
      
  //  let moviename=this.route.snapshot.paramMap.get('movie');
  //  this.movies=moviename;
  }
  
  add(movie){
    var m={
      "id":movie.id,
      "movie":movie.title,
      "comments":"",
      "poster_path":movie.poster_path,
    "adult":movie.adult,
    "overview":movie.overview,
    "release_date":movie.release_date,
    "genre_ids":movie.genre_ids,
    "original_title":movie.original_title,
    "original_language":movie.original_language,
    "backdrop_path":movie.backdrop_path,
    "popularity":movie.popularity,
    "vote_count":movie.vote_count,
    "video":movie.video,
    "vote_average":movie.vote_average
    }
    this.addservice.addMovie(m).subscribe(data =>console.log(data));
    
  }
 
  // ngAfterViewInit() {
  //   this.movies = this.details.movies;
  // }

}
