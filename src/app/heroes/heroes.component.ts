import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PoTableAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  idHero: string;
  heroID: number;

  constructor(private heroService: HeroService, private rota: Router) { }

  actions: Array<PoTableAction> = [
    { action: this.delete.bind(this), icon: 'po-icon po-icon-delete', label: 'Excluir'},
    { action: this.details.bind(this), icon: 'po-icon po-icon-edit', label: 'Editar'}
  ];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  details(hero: Hero): void {
    var id = `${hero.id}`
    this.rota.navigateByUrl('/detail/' + id)
    console.log('id= ' + id)
  }
}
