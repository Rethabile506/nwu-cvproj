import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {Joke} from '../../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  jokeUrl="https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) { }

  getJoke(){
    return this.http.get<Joke>(this.jokeUrl);
  }
}
