import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import {Task} from './interface/task.model'
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  counterId: number= 1;
  tasks: Task[] = [];

  addTask(name: string, description: string){
    const task: Task = {
      id: this.counterId++,
      title: name,
      description: description,
      isDone: false
    }; 
    this.tasks.push(task);
    console.log(name);
  }

}
