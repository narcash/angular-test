import { FinishTestComponent } from './finish-test/finish-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WelcomeTestComponent } from './welcome-test/welcome-test.component';
import { StartTestComponent } from './start-test/start-test.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [

  { path: 'main', component: MainPageComponent },
  { path: 'welcome', component: WelcomeTestComponent },
  { path: 'start', component: StartTestComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'finish', component: FinishTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
