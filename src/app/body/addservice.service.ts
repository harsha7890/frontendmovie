import { Observable } from 'rxjs';
import { moviedb } from './../moviedb';
import { HttpClient } from '@angular/common/http';
import { Movies, Results } from './../movie';
import { Injectable } from '@angular/core';
// import { moviedb } from '../moviedb';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
 Results=[];
 
  constructor(private http:HttpClient) { }
  addMovie(movie:moviedb){
    return this.http.post<moviedb>("https://localhost:8092/applicationmovie/api/v1/movie",movie);
  }
  getmovies(){
    return this.http.get<moviedb[]>("https://localhost:8092/applicationmovie/api/v1/movie");
  }
  searchmovie(movie){
    return this.http.get<moviedb[]>("https://localhost:8092/applicationmovie/api/v1/{{movie}}",movie);
  }
  update(movie){
    return this.http.put<moviedb>("https://localhost:8092/applicationmovie/api/v1/"+movie.id,movie.comments);
  }
  delete(movie){
    return this.http.delete<moviedb>("https://localhost:8092/applicationmovie/api/v1/"+movie.id);
  }
}
