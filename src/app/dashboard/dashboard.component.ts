import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Area } from '../area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = []
	areas: Area[] = []

  constructor(
    private heroService: HeroService,
    private areaService: AreaService) { }

  ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
    this.areaService.list()
      .subscribe(areas => {
        console.log('areas');
        console.log(areas);
        this.areas = areas;
      });
  }
}
