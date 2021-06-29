import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from '../../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[] | undefined;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getHeroes();
    }, (Math.random()) * 1000);
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
