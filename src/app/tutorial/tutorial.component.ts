import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private apiCallService: APICallService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiCallService.getData(this.router.url + ".json").subscribe(data => {
      this.content = data.content;
      this.subjectHeader = data.content.topicHeader;
    });
  }

  changeView(event: any) {
    let nextURI = (this.router.url).replace('tutorials', 'quiz');
    this.router.navigate([nextURI]);
    console.log(event);
  }
}
