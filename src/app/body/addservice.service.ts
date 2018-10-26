import { HttpClient } from '@angular/common/http';
import { Movies, Results } from './../movie';
import { Injectable } from '@angular/core';
import { moviedb } from '../moviedb';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
 Results=[];
 
  constructor(private http:HttpClient) { }
  addMovie(movie:moviedb){
    return this.http.post<moviedb>("http://localhost:8092/applicationmovie/api/v1/movie",movie)
  }
 
}
