import { Component } from '@angular/core';
import { HeroService } from '../../../services/hero/hero.service';
import { Person } from '../../../models';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {

  heroes: Person[];

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

}
