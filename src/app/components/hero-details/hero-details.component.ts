import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../../core/services/api.service";
import { StoreService } from "../../core/services/store.service";
import {Router} from '@angular/router';
import {SlideInOutAnimation} from '../../animation';
import {SlideInAnimation} from '../../animation-tow';
import {AnimationSmall} from '../../animation-small';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  public load: boolean;
  public heroInfo: any;
  public id: number;
  public showSkins: boolean;
  public state: string;
  public ability: number;

  constructor(private api: ApiService, private store: StoreService, private router: Router) {
    this.load = true;
    this.heroInfo = null;
    this.id = this.store.getHeroDetailsSnapshot();
    this.showSkins = false;
    this.state = 'in';
    this.ability = 1;
  }

  ngOnInit() {
    this.api.getHeroDetails(this.id).subscribe(data => {
      console.log(data);
      this.heroInfo = data;
      this.load = false;
    }, error => {
        this.router.navigate(['/heroes']);
    });
  }

  public changeAbility(number): void {
    console.log(number);
    this.ability = number;
  }

  public changeState(): void {
    this.state = this.state === 'out' ? 'in' : 'out';
    this.showSkins = !this.showSkins;
  }

  public goToElement(el): void {
    el.scrollIntoView();
  }

  public showSkinsAction(): void {
    this.showSkins = !this.showSkins;
  }

  public getHeroClass(): string {
    switch (this.heroInfo.id) {
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

  public getBackground(): string {
    switch (this.heroInfo.id) {
      case 1:
        return 'ana-header';
      case 2:
        return 'bastion-header';
      case 3:
        return 'dva-header';
      case 4:
        return 'genji-header';
      case 5:
        return 'hanzo-header';
      case 6:
        return 'junkrat-header';
      case 7:
        return 'lucio-header';
      case 8:
        return 'mccree-header';
      case 9:
        return 'mei-header';
      case 10:
        return 'mercy-header';
      case 11:
        return 'phara-header';
      case 12:
        return 'reaper-header';
      case 13:
        return 'reinhardt-header';
      case 14:
        return 'roadhog-header';
      case 15:
        return 'soldier-header';
      case 16:
        return 'symmetra-header';
      case 17:
        return 'torbjorn-header';
      case 18:
        return 'tracer-header';
      case 19:
        return 'widow-header';
      case 20:
        return 'winston-header';
      case 21:
        return 'zaria-header';
      case 22:
        return 'zenyatta-header';
      case 23:
        return 'sombra-header';
      case 24:
        return 'orisa-header';
    }
  }

}
