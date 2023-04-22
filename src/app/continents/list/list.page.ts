import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Continents } from '../continents';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  continents: Array<Continents> = [];


  ngOnInit() {
    this.list();
  }
  list(): any {
    return this.activateRoute.data.subscribe(({ continents })=>{
      this.continents = continents;
  console.log(continents);
  })
}
}
