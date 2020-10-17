import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GHOST_TABS, HERO_TABS } from 'src/app/constants/tabs,constant';
import { GhostService } from 'src/app/services/ghost/ghost.service';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Person, Tab } from '../../../models';

@Component({
  selector: 'app-person-container',
  templateUrl: './person-container.component.html',
  styleUrls: ['./person-container.component.scss']
})
export class PersonContainerComponent implements OnInit {

  tabs: Tab[];
  personList: Person[];

  constructor(private route: ActivatedRoute, private heroService: HeroService, private ghostService: GhostService) {
    const type = route.snapshot.data['type'];
    this.setTabs(type);
  }

  private setTabs(type: string): void {
    switch (type) {
      case 'ghost':
        this.setGhostData();
        break;
      case 'hero':
      default:
        this.setHeroData();
        break;

    }
  }

  private setGhostData(): void {
    this.tabs = GHOST_TABS;
    this.personList = this.ghostService.getGhosts();
  }

  private setHeroData(): void {
    this.tabs = HERO_TABS;
    this.personList = this.heroService.getHeroes();

  }

  ngOnInit(): void {
  }

}
