import { Injectable } from '@angular/core';
import { Person } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class GhostService {

  constructor() { }

  getGhosts(): Person[] {
    const ghosts: Person[] = [
      {
        id: 101,
        name: 'Black Knight',
        characterClass: 'ghost'
      },
      {
        id: 102,
        name: 'Ghost of Captain Cutler',
        characterClass: 'ghost'
      },
      {
        id: 103,
        name: 'Phantom',
        characterClass: 'ghost'
      },
      {
        id: 104,
        name: 'Miner Forty-Niner',
        characterClass: 'ghost'
      },
    ];
    return ghosts;
  }
}
