import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../core/services/store.service";
import { TopHeroStats } from "../../models/top-hero-stats";
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userInfo: any;
  public load: boolean;
  public topHeroes: TopHeroStats[];
  public topTimePlayed: any;
  public data: any;
  public colors: any;
  public tempColors: any;
  public userInfoTwo: any;

  constructor(private store: StoreService) {
    this.userInfo = null;
    this.load = true;
    this.topHeroes = [];
    this.topTimePlayed = [];
    this.userInfoTwo = null;
    this.colors = [
      {name: 'Ana', value: '#6E87AF'},
      {name: 'Bastion', value: '#7C8F7B'},
      {name: 'Brigitte', value: '#BF746E'},
      {name: 'D.Va', value: '#EC92C6'},
      {name: 'Doomfist', value: '#83524B'},
      {name: 'Genji', value: '#95EE42'},
      {name: 'Hanzo', value: '#B9B48A'},
      {name: 'Junkrat', value: '#EABB52'},
      {name: 'Lúcio', value: '#83C951'},
      {name: 'McCree', value: '#AF595C'},
      {name: 'Mei', value: '#6CABED'},
      {name: 'Mercy', value: '#EBE8BB'},
      {name: 'Moira', value: '#7D3D50'},
      {name: 'Orisa', value: '#458B42'},
      {name: 'Pharah', value: '#3B79C4'},
      {name: 'Reaper', value: '#7D3E50'},
      {name: 'Reinhardt', value: '#95A0A6'},
      {name: 'Roadhog', value: '#B68C51'},
      {name: 'Soldier: 76', value: '#687693'},
      {name: 'Sombra', value: '#7459BA'},
      {name: 'Symmetra', value: '#8EBCCE'},
      {name: 'Torbjörn', value: '#BF746F'},
      {name: 'Tracer', value: '#D69241'},
      {name: 'Widowmaker', value: '#9C69A9'},
      {name: 'Winston', value: '#A1A5BE'},
      {name: 'Wrecking Ball', value: '#D99242'},
      {name: 'Zarya', value: '#EA81B9'},
      {name: 'Zenyatta', value: '#EEE582'}
    ];
    this.tempColors = [];
  }

  ngOnInit() {
    this.store.getUserInfoTwo().subscribe(data => {
      this.userInfoTwo = data;
    });

    this.store.getUserInfo().subscribe(data => {
      console.log(data, 'data');
      this.load = false;
      this.userInfo = data;

      if (this.userInfo !== null) {
        this.topTimePlayed = this.userInfo.stats.top_heroes.quickplay.played;
        this.topTimePlayed = this.topTimePlayed.slice(0, 5);
        const values = [];
        const labels = [];
        const colors = [];

        for (const hero of this.topTimePlayed) {
          hero.played = parseInt(hero.played);
          values.push(hero.played);
          labels.push(hero.hero);
          this.getTempColor(hero.hero);
        }

        this.data = {
            datasets: [{
              data: values,
              backgroundColor: this.tempColors
            }],
            labels: labels
        };

      }

      console.log(this.topTimePlayed, '???');

    });
  }

  getTempColor(name): void {
    for (const color of this.colors) {
      if (color.name === name) {
        this.tempColors.push(color.value);
      }
    }
  }
}
