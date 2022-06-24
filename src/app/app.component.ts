import { Component } from '@angular/core';
import { APICallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amit-tutorial';
  show_sidebar: boolean = false;
  side_bar_data: any;
  page_list: any = [];
  constructor(
    private apiCallService: APICallService
  ) { }

  ngOnInit(): void {
    this.getSideBarData();
  }

  getNavBarStatus(navBarStatus: boolean) {
    this.show_sidebar = navBarStatus;
  }
  getSideBarData(): any {
    this.apiCallService.getSideBarData().subscribe(data => {
      this.side_bar_data = data.content;
      let val = this.side_bar_data;
      for (var i = 0; i < val.length; i++) {
        let val1 = val[i].children
        for (var j = 0; j < val1.length; j++) {
          let val2 = val1[j].children;
          for (var k = 0; k < val2.length; k++) {
            let pageDetails = {
              "pageName": val2[k].name,
              "url": val2[k].url
            }
            this.page_list.push(pageDetails);
          }
        }
      }
      this.apiCallService.setPageData(this.page_list);
    });
  }

  sideBarClicked(): void {
    this.show_sidebar = false;
  }
}


