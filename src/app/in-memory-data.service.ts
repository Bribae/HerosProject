import { Injectable } from '@angular/core';
import { InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      {id: 11, name: "Gay Bowser"},
      {id: 12, name: "Proboscis Monkey"},
      {id: 13, name: "ḩ̶̦͕͍͐̎̃͘ê̶̻͖̯͗́͌͐ͅl̸̨̜̪̺̈́͊̎̆þ̸̙̥̭̯͑̈́̽͑ ̵̘͈̼͉̒̓͑̕m̸̨͈̺̈̓͂̾ͅḙ̸̪͉̺̂̀̽̈̑"},
      {id: 14, name: "President Obama"},
      {id: 15, name: "Rubber Duck"},
      {id: 16, name: "Inwin"},
      {id: 17, name: "Bannan Man"},
      {id: 18, name: "Chair"},
      {id: 19, name: "Twink"},
      {id: 20, name: "Pinoctio"}
    ];
    return {heroes};
  }
genId(heroes: Hero[]): number {
    return heroes.length > 0?
      Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}



  constructor() { }
}
