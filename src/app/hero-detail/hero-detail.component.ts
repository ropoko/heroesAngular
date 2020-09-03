import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PoButtonGroupItem, PoModalComponent, PoInputComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  oldName: string;

  @ViewChild('heroName', { static: true }) input: PoInputComponent;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  buttons: Array<PoButtonGroupItem> = [
    { action: this.goBack.bind(this), label: 'Voltar' },
    { action: this.save.bind(this), label: 'Salvar' }
  ];

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero,
        this.oldName = hero.name
      });
  }

  goBack() {
    this.location.back();
  }

  @ViewChild('modal', { static: false }) poModal: PoModalComponent;

  save() {
    this.poModal.setClickOut = true;
    this.poModal.hideClose = true;
    this.poModal.title = 'As alterações foram salvas!';
    this.poModal.size = 'sm';

    this.heroService.updateHero(this.hero)
      .subscribe(() => this.poModal.open());
  }
}