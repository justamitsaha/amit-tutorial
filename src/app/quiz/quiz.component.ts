import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changeView(event: any) {
    let nextURI = (this.router.url).replace('quiz', 'tutorials');
    this.router.navigate([nextURI]);
    console.log(event);
  }

}
