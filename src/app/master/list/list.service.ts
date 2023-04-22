  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Character } from '../character';

  @Injectable({
    providedIn: 'root'
  })
  export class ListService {

 readonly URL = "https://thronesapi.com/api/v2/";
readonly RESOURCE = "Characters";

    constructor(private http: HttpClient) { }

    list(): Observable<Character[]>{

return this.http.get<Character[]>(this.URL+this.RESOURCE);
    }
  }
