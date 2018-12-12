import { Component, OnInit } from '@angular/core';
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

  constructor(private api: ApiService, private store: StoreService, private router: Router) {
    this.load = true;
    this.heroInfo = null;
    this.id = this.store.getHeroDetailsSnapshot();
    this.showSkins = false;
    this.state = 'in';
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

  public changeState(): void {
    this.state = this.state === 'out' ? 'in' : 'out';
    this.showSkins = !this.showSkins;
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
      case 11:
        return 'Anubis';
      case 2:
      case 20:
        return 'Gibraltar';
      case 3:
        return 'Pusan';
      case 4:
      case 22:
        return 'Nepal';
      case 5:
        return 'Hanamura';
      case 6:
      case 14:
        return 'Junkertown';
      case 7:
        return 'Lijang';
      case 8:
        return 'Route';
      case 9:
        return 'Ecopoint';
      case 12:
        return 'Rialto';
      case 13:
        return 'Eichenwalde';
      case 16:
        return 'Oasis';
      case 18:
      case 19:
        return 'Kings';
    }
  }

}
