import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/welcome',
    pathMatch: 'full',
  },
  { path: 'home/welcome', component: HomeComponent },
  { path: 'java/tutorials/:topic/:subtopic', component: TutorialComponent },
  { path: 'java/quiz/:topic/:subtopic', component: QuizComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
