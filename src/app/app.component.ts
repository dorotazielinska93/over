import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiService } from "./core/services/api.service";
import { StoreService } from "./core/services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: ApiService, private store: StoreService) {
    this.api.getHeroesInfo().subscribe(data => {
      this.store.setHeroes(data.data);
    });
  }
}
