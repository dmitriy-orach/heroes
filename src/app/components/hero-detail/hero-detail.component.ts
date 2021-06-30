import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() public hero: Hero | any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(+id)
      .subscribe((hero: Hero | undefined) => this.hero = hero);
  }

  public goBack() {
    this.location.back();
  }
  public save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
