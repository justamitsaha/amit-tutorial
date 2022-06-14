import { Component } from '@angular/core';
import { APICallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amit-tutorial';

  side_bar_data: any;
  constructor(
    private apiCallService: APICallService
  ) { }

  ngOnInit(): void {
    this.getSideBarData();
  }
  getSideBarData(): any {
    this.apiCallService.getSideBarData().subscribe(data => {
      return this.side_bar_data = data.content;
    });
  }
}


