import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../core/services/store.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userInfo: any;
  public load: boolean;

  constructor(private store: StoreService) {
    this.userInfo = null;
    this.load = true;
  }

  ngOnInit() {
    this.store.getUserInfo().subscribe(data => {
      console.log(data, 'data');
      this.userInfo = data;
      this.load = false;
    });
  }

}
