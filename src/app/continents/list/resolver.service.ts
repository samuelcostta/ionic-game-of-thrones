import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Continents } from '../continents';
import { ListService } from './list.service';

@Injectable({providedIn: 'root'})
export class ResolverService implements Resolve<Continents[]>{
  
  constructor(private service: ListService){}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Continents[] | Observable<Continents[]> | Promise<Continents[]> {
    return this.service.list();

    }
}
