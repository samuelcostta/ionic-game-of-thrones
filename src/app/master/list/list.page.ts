import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  characteres: Array<Character> = [];


  ngOnInit() {
    this.list();
  }

list(): any {
  return this.activateRoute.data.subscribe(({ characteres })=>{
    this.characteres = characteres;
console.log(characteres);
  })
}

}
