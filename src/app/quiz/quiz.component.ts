import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APICallService } from '../apicall.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  content: any;
  answer: any;
  constructor(
    private router: Router,
    private apiCallService: APICallService
  ) { }

  ngOnInit(): void {
    let webURI = (this.router.url).split("/");
    let path = "/" + webURI[1] + "/" + webURI[2] + "/" + webURI[3] + "/" + webURI[3] + ".json"
    this.apiCallService.getData(path).subscribe(data => {
      this.content = data.content;
    });
  }

  changeView(event: any) {
    let nextURI = (this.router.url).replace('quiz', 'tutorials');
    this.router.navigate([nextURI]);
    console.log(event);
  }

  submitAnswer(question: any) {
    if (question.answer === this.answer) {
      question.isCorect = true;
      question.isInCorect = false;
    } else {
      question.isInCorect = true;
      question.isCorect = false;
    }
  }
  answerSelected(selection: any, question: any) {
    question.enabled = true;
    this.answer = selection;
  }

}
