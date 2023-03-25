import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WelcomeTestComponent } from './welcome-test/welcome-test.component';
import { StartTestComponent } from './start-test/start-test.component';
import { FinishTestComponent } from './finish-test/finish-test.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WelcomeTestComponent,
    StartTestComponent,
    FinishTestComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
