import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { HeroDetailsComponent } from "./components/hero-details/hero-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  },
  {
    path: 'hero-details',
    component: HeroDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

