import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, TopLevel } from './naruto.interface';

interface Characters{
  name : string,
  clan : string
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class NarutoService {

  constructor( 

    private baseUrl: string = "https://dattebayo-api.onrender.com/characters",

    private http: HttpClient
  
  ){}

  getCharacters(): Observable <Character[]>{
    return this.http.get<TopLevel>(this.baseUrl).pipe(
      map((data) => data.characters)
    )
  }

}
