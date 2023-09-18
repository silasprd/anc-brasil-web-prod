import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialAction } from '../models/SocialAction';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

let apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class SocialActionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  findAll(): Observable<SocialAction[]>{
    return this.httpClient.get<SocialAction[]>(`${apiUrl}/social-action.json`)
  }

}
