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

  constructor(private api: ApiService, private store: StoreService, private router: Router) {
    this.showClasses = false;
    this.api.getHeroesInfo().subscribe(data => {
      this.store.setHeroes(data.data);
    });
  }

  public checkRoute(): void {
    if (this.router.routerState.snapshot.url === '/heroes') {
      this.showClasses = true;
    } else {
      this.showClasses = false;
    }
  }
}
