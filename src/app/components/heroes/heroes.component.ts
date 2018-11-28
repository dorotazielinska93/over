import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../core/services/api.service";
import { StoreService } from "../../core/services/store.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: any;

  constructor(private api: ApiService, private store: StoreService, private router: Router) {
    this.heroes = null;
  }

  ngOnInit() {
    this.store.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  public downloadHeroDetails(id): void {
    this.store.setHeroDetails(id);
    this.router.navigate(['/hero-details']);
  }
}
