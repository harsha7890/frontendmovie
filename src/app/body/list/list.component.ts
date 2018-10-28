import { Router, Routes } from '@angular/router';
import { SearchdataService } from './../../header/searchdata.service';
import { moviedb } from './../../moviedb';
import { HttpClient } from '@angular/common/http';
import { AddserviceService } from './../addservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private addservice:AddserviceService,private searchdataservice:SearchdataService,private router: Router) { }
  movies:moviedb[]=[];
  moviesmain=[];
  ngOnInit() {
  this.addservice.getmovies().subscribe(data =>this.movies =data);
  // for(let movie of this.movies) {
    
  // }
  }
  update(movie){

    var m={
      "id":movie.id,
      "movie":movie.title,
      "comments":movie.comment,
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
  };
    this.addservice.update(m).subscribe(data=>console.log(data));
    location.reload();
  }
  delete(movie){
    this.addservice.delete(movie).subscribe(data=>console.log);
    location.reload();
  }
}