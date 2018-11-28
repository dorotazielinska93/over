import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from "../../core/services/api.service";
import { StoreService } from "../../core/services/store.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit {
  public regions: any;
  public chosenRegion: string;
  public platforms: any;
  public chosenPlatform: string;
  public userName: string;
  public error: string;
  public display: boolean;

  constructor(private api: ApiService, private store: StoreService, private router: Router) {
    this.userName = '';
    this.chosenRegion = 'US';
    this.error = null;
    this.display = false;
    this.regions = [
      {name: 'US', value: 'us'},
      {name: 'Asia', value: 'asia'},
      {name: 'Europe', value: 'eu'}
    ];
    this.chosenPlatform = 'PC';
    this.platforms = [
      {name: 'PC', value: 'pc'},
      {name: 'Xbox', value: 'xbox'},
      {name: 'PlayStation', value: 'ps'}
    ];
  }

  ngOnInit() {
  }

  public searchUser(): void {
    const user = this.userName.replace('#', '-');

    this.api.getUserInfo(this.chosenPlatform, this.chosenRegion, user).subscribe(response => {
      if (response.error) {
        this.error = response.error;
        this.display = true;
        return;
      }

      this.store.setuserInfo(response);
      this.router.navigate(['/user-details']);
    });
  }

}
