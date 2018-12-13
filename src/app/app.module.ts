import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { DropdownModule, ProgressSpinnerModule, TabMenuModule } from "primeng/primeng";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "./core/core.module";
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { DialogModule } from "primeng/dialog";
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSelectionComponent } from './components/hero-selection/hero-selection.component';
import { ChartModule } from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HeroesComponent,
    UserDetailsComponent,
    MenuComponent,
    ErrorDialogComponent,
    HeroDetailsComponent,
    HeroSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    CoreModule,
    DialogModule,
    ProgressSpinnerModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
