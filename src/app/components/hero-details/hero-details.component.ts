import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../core/services/api.service";
import { StoreService } from "../../core/services/store.service";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  public load: boolean;
  public heroInfo: any;
  public id: number;

  constructor(private api: ApiService, private store: StoreService) {
    this.load = true;
    this.heroInfo = null;
    this.id = this.store.getHeroDetailsSnapshot();
  }

  ngOnInit() {
    this.api.getHeroDetails(this.id).subscribe(data => {
      this.heroInfo = data;
      this.load = false;
    });
  }

}
