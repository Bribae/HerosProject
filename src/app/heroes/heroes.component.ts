import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { InMemoryDataService } from '../in-memory-data.service'
import {Validator, Validators} from "@angular/forms";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,
  private InMemServ: InMemoryDataService) { }

  powers = this.InMemServ.powers


add(name: string, power: string, alterEgo: string): void {
    name = name.trim();
    alterEgo = alterEgo.trim()
    if(!name) {return; }
    if(!alterEgo) {return; }
    this.heroService.addHero({ name, power, alterEgo}).subscribe
    (hero => {
      this.heroes.push(hero)
    })

}

  heroes: Hero[] = [];

delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


}
