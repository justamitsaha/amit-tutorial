import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiCallService.getData(params['topic']).subscribe(data => {
        this.content = data.content;
        this.subjectHeader = data.content.topicHeader;
      });
    });

  }

}
