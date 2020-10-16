import { Injectable } from '@angular/core';
import { Person } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Person[] {
    const heroes: Person[] = [
      {
        id: 1,
        name: 'Fred',
        characterClass: 'hero'
      },
      {
        id: 2,
        name: 'Daphne',
        characterClass: 'hero'
      },
      {
        id: 3,
        name: 'Velma',
        characterClass: 'hero'
      },
      {
        id: 4,
        name: 'Shaggy',
        characterClass: 'hero'
      },
      {
        id: 5,
        name: 'Scooby',
        characterClass: 'hero'
      }
    ];
    return heroes;
  }
}
