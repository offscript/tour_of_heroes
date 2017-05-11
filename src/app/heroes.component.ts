import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';



@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit { 
	selectedHero: Hero;
	heroes: Hero[];
	
	constructor(
    private heroService: HeroService,
    private router: Router
    ) {}

	ngOnInit(): void {
    	this.getHeroes();
  	}

	getHeroes(): void {
  		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void { //parameter is hero of type hero
  		this.selectedHero = hero;
  		console.log(hero.name); //the selected hero of this instance is
  		//the hero we get onclick, passed to use from the object in li via the
  		//HEROES const.				 
	}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
