import { Component } from '@angular/core';
import { APICallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amit-tutorial';
  show_sidebar: Boolean = false;
  side_bar_data: any;
  constructor(
    private apiCallService: APICallService
  ) { }

  ngOnInit(): void {
    this.getSideBarData();
  }

  getNavBarStatus(navBarStatus: Boolean) {
    this.show_sidebar = navBarStatus;
  }
  getSideBarData(): any {
    this.apiCallService.getSideBarData().subscribe(data => {
      return this.side_bar_data = data.content;
    });
  }
}


