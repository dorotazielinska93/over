import { NgModule } from '@angular/core';
import { ApiService } from "./services/api.service";
import { StoreService } from "./services/store.service";

@NgModule({
  providers: [
    ApiService,
    StoreService
  ]
})
export class CoreModule { }
