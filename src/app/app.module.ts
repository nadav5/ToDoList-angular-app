import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCardComponent } from './components/task-board/task-card/task-card.component';
import { TaskBoardComponent } from './components/task-board/task-board.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
