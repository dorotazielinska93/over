import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getUserInfoOne(user): Observable<any> {
    return this.http.get(`https://ow-api.com/v1/stats/pc/eu/${user}/complete`);
  }

  public getHeroesInfo(): Observable<any> {
    return this.http.get(`https://overwatch-api.net/api/v1/hero`);
  }

  public getHeroDetails(id): Observable<any> {
    return this.http.get(`https://overwatch-api.net/api/v1/hero/${id}`);
  }

  public getUserInfoTwo(user: any): Observable<any> {
    return this.http.get(`http://overwatchy.com/stats/pc/eu/${user}`);
  }
}
