import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class StoreService {
  private userInfo: BehaviorSubject<any>;
  private heroDetails: BehaviorSubject<any>;
  private heroes: BehaviorSubject<any>;
  private userInfoTwo: BehaviorSubject<any>;

  constructor() {
    this.userInfo = new BehaviorSubject<any>(null);
    this.heroDetails = new BehaviorSubject<any>(null);
    this.heroes = new BehaviorSubject<any>(null);
    this.userInfoTwo = new BehaviorSubject<any>(null);
  }

  public getUserInfo(): Observable<any> {
    return this.userInfo.asObservable();
  }

  public getHeroes(): Observable<any> {
    return this.heroes.asObservable();
  }

  public getUserInfoTwo(): Observable<any> {
    return this.userInfoTwo.asObservable();
  }

  public setUserInfoTwo(info): void {
    this.userInfoTwo.next(info);
  }

  public setHeroes(heroes): void {
    this.heroes.next(heroes);
  }

  public setuserInfo(info): void {
    this.userInfo.next(info);
  }

  public getHeroDetails(): Observable<any> {
    return this.heroDetails.asObservable();
  }

  public setHeroDetails(hero): void {
    this.heroDetails.next(hero);
  }

  public getHeroDetailsSnapshot(): number {
    return this.heroDetails.getValue();
  }
}
