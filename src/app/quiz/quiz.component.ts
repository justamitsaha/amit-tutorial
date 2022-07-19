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
  answerList: any = [];
  constructor(
    private router: Router,
    private apiCallService: APICallService
  ) { }

  ngOnInit(): void {
    let webURI = (this.router.url).split("/");
    let path = "/" + webURI[1] + "/" + webURI[2] + "/" + webURI[3] + ".json"
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
      question.isCorrect = true;
      question.isInCorrect = false;
    } else {
      question.isInCorrect = true;
      question.isCorrect = false;
    }
  }
  answerSelected(selection: any, question: any) {
    question.enabled = true;
    this.answer = selection.currentTarget.dataset.count;
  }

  submitCheckAnswer(question: any) {
    let intList = [];
    let match = true;
    if (this.answerList.length > 0 && question.answer.length > 0) {
      if (this.answerList.length === question.answer.length) {
        for (var i = 0; i < this.answerList.length; i++) {
          if (this.answerList[i] != question.answer[i]) {
            match = false;
          }
        }
      } else {
        match = false;
      }
    } else {
      match = false
    }
    if (match) {
      question.isCorrect = true;
      question.isInCorrect = false;
      question.enabled = false;
    } else {
      question.isInCorrect = true;
      question.isCorrect = false;
      question.enabled = false;
    }
    this.answerList = [];
  }

  answerListSelected(selection: any, question: any) {
    let count = selection.currentTarget.dataset.count;
    if (this.answerList.length == 0) {
      this.answerList.push(count);
    } else {
      let match = false;
      for (var i = 0; i < this.answerList.length; i++) {
        if (count == this.answerList[i]) {
          this.answerList.splice(i, 1);
          match = true;
          break;
        }
      }
      if (!match) {
        this.answerList.push(count);
      }
    }
    if (this.answerList.length > 0) {
      question.enabled = true;
    } else {
      question.enabled = false;
    }
  }



}
