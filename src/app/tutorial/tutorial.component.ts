import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APICallService } from '../apicall.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  content: any;
  subjectHeader: String = "";
  isChecked: boolean = false;
  prev_page: any;
  next_page: any;
  header_part_one: String = "";
  header_part_two: String = "";
  constructor(
    private apiCallService: APICallService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.apiCallService.getData(this.router.url + ".json").subscribe(data => {
        let page_list = this.apiCallService.getPageData();
        this.header_part_one = this.router.url.split("/")[1];
        this.header_part_two = this.router.url.split("/")[3];
        this.content = data.content;
        this.subjectHeader = data.content.topicHeader;
        for (var i = 0; i < page_list.length; i++) {
          if (page_list[i].url === this.router.url) {
            this.prev_page = null;
            this.next_page = null;
            if (i != 0) {
              this.prev_page = page_list[i - 1];
            }
            if (i != (page_list.length + 1)) {
              this.next_page = page_list[i + 1];
            }
          }
        }
      });
    });
  }

  changeView(event: any) {
    let nextURI = (this.router.url).replace('tutorials', 'quiz');
    this.router.navigate([nextURI]);
  }
}
