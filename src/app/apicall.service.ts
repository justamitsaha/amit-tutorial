import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APICallService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    let response = new Subject<any>();
    this.http.get("http://localhost:4200/assets/data.json").subscribe((data) => {
      response.next(data);
    }, (error) => {
      response.error(error);
    });
    return response;
  }

  getSideBarData() {
    let response = new Subject<any>();
    this.http.get("http://localhost:4200/assets/sidebar.json").subscribe((data) => {
      response.next(data);
    }, (error) => {
      response.error(error);
    });
    return response;
  }
}
