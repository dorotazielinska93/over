import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../../core/services/api.service";
import { StoreService } from "../../core/services/store.service";
import { Router } from "@angular/router";
import { SlideInOutAnimation } from "../../animation";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [SlideInOutAnimation]
})
export class HeroesComponent implements OnInit {
  public heroes: any;
  public class: string;
  public state: string;
  public field: number;

  constructor(private api: ApiService, private store: StoreService, private router: Router) {
    this.heroes = null;
    this.state = 'in';
    this.field = 4;
  }

  ngOnInit() {
    this.store.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  public show(): void {
    this.state = (this.state === 'out' ? 'in' : 'out');
    // const herosSpec = [];
    // for (const hero of this.heroes) {
    //   if (hero.affiliation === 'Overwatch') {
    //     herosSpec.push(hero);
    //   }
    // }
    //
    // this.heroes = herosSpec;
    // this.state = 'in';
  }

  public getHeroClass(id): string {
     switch (id) {
       case 1:
         return 'ana';
       case 2:
         return 'bastion';
       case 3:
         return 'dva';
       case 4:
         return 'genji';
       case 5:
         return 'hanzo';
       case 6:
         return 'junkrat';
       case 7:
         return 'lucio';
       case 8:
         return 'mccree';
       case 9:
         return 'mei';
       case 10:
         return 'mercy';
       case 11:
         return 'phara';
       case 12:
         return 'reaper';
       case 13:
         return 'reinhardt';
       case 14:
         return 'roadhog';
       case 15:
         return 'soldier';
       case 16:
         return 'symmetra';
       case 17:
         return 'torbjorn';
       case 18:
         return 'tracer';
       case 19:
         return 'widow';
       case 20:
         return 'winston';
       case 21:
         return 'zaria';
       case 22:
         return 'zenyatta';
       case 23:
         return 'sombra';
       case 24:
         return 'orisa';
     }
  }

  public downloadHeroDetails(id): void {
    this.store.setHeroDetails(id);
    this.router.navigate(['/hero-details']);
  }
}
