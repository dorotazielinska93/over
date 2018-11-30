import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiService } from "./core/services/api.service";
import { StoreService } from "./core/services/store.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showClasses: boolean;
  public heroes: any;
  public healers: any;
  public tanks: any;
  public dps: any;

  constructor(private api: ApiService, private store: StoreService, private router: Router) {
    this.showClasses = false;
    this.tanks = [];
    this.healers = [];
    this.dps = [];
    this.api.getHeroesInfo().subscribe(data => {
      this.store.setHeroes(data.data);
      this.heroes = data.data;

      for (const hero of this.heroes) {
        switch (hero.name) {
          case 'Ana':
          case 'Mercy':
          case 'Lúcio':
          case 'Zenyatta':
            this.healers.push(hero);
            break;
          case 'Orisa':
          case 'Zarya':
          case 'Winston':
          case 'Roadhog':
          case 'Reinhardt':
          case 'D.Va':
            this.tanks.push(hero);
            break;
          case 'Bastion':
          case 'Genji':
          case 'Hanzo':
          case 'Junkrat':
          case 'McCree':
          case 'Mei':
          case 'Pharah':
          case 'Reaper':
          case 'Soldier: 76':
          case 'Symmetra':
          case 'Torbjörn':
          case 'Tracer':
          case 'Widowmaker':
          case 'Sombra':
            this.dps.push(hero);
            break;
        }
      }
    });
  }

  public setDps(): void {
    this.store.setHeroes(this.dps);
  }

  public setHealers(): void {
    this.store.setHeroes(this.healers);
  }

  public setTanks(): void {
    this.store.setHeroes(this.tanks);
  }

  public checkRoute(): void {
    if (this.router.routerState.snapshot.url === '/heroes') {
      this.showClasses = true;
    } else {
      this.showClasses = false;
    }
  }
}
