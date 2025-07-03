import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../../interface/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<Task>();


onMarkDone() {
  this.task.isDone=true;
  console.log("Task is done");
}

onDeleteTask(){
  this.deleteTask.emit(this.task);
}

  
}
