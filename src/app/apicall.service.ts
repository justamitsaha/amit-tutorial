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

  private pageData: any;

  getPageData(): any {
    return this.pageData
  }

  setPageData(data: any): void {
    this.pageData = data;
  }

  getData(uri: String) {
    let response = new Subject<any>();
    this.http.get("http://localhost:4200/assets/json" + uri).subscribe((data) => {
      response.next(data);
    }, (error) => {
      response.error(error);
    });
    return response;
  }

  getSideBarData() {
    let response = new Subject<any>();
    this.http.get("http://localhost:4200/assets/json/sidebar.json").subscribe((data) => {
      response.next(data);
    }, (error) => {
      response.error(error);
    });
    return response;
  }
}
