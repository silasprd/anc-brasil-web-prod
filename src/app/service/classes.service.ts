import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classes } from '../models/Classes';
import { Observable } from 'rxjs';

let apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  findAll(): Observable<Classes[]>{
    const response = this.httpClient.get<Classes[]>(`${apiUrl}/classes.json`)
    console.log(response)
    return response
  }

}

