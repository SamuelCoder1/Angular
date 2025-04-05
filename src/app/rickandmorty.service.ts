import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Characters {
  name : string,
  age : number,
  genre : string
}

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private baseUrl: string = "https://rickandmortyapi.com/"

  constructor( 
    private http: HttpClient
  ){}

  getCharacters(): Observable <Characters[]>{
    return this.http.get<Response[]>(this.baseUrl).;
  }
}
