import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Hulk' },
      { id: 2, name: 'Capitão América' },
      { id: 3, name: 'Capitã Marvel' },
      { id: 4, name: 'Arqueiro' },
      { id: 5, name: 'Homem de Ferro' },
      { id: 6, name: 'Thor' },
      { id: 7, name: 'Super-Man' },
      { id: 8, name: 'Mulher Maravilha' },
      { id: 9, name: 'Wolverine' },
      { id: 10, name: 'Tempestade' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}