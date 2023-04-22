  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
import { Continents } from '../continents';
 

  @Injectable({
    providedIn: 'root'
  })
  export class ListService {

 readonly URL = "https://thronesapi.com/api/v2/";
readonly RESOURCE = "Continents";

    constructor(private http: HttpClient) { }

    list(): Observable<Continents[]>{

return this.http.get<Continents[]>(this.URL+this.RESOURCE);
    }
  }
