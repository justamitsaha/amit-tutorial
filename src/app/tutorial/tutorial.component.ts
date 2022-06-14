import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  content: any;
  subjectHeader: String = "";
  constructor(
    private apiCallService: APICallService
  ) { }

  ngOnInit(): void {
    this.apiCallService.getData().subscribe(data => {
      this.content = data.content;
      this.subjectHeader = data.content.topicHeader;
    });

  }

}
