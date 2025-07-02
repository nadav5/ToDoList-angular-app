import { Component, Input } from '@angular/core';
import { Task } from '../../../app/interface/task.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent {
  @Input() tasks: Task[] = [];


  onTaskMarked(task: Task){
    task.isDone= true;
    console.log("Done")
  }

  onDeleteTask(task: Task){
    // const index = task.id - 1;
    // this.tasks.splice(index,1);
    // console.log("Delete");

    const index = this.tasks.findIndex(t=> t.id=== task.id);
    if (index > -1){
      this.tasks.splice(index,1);
      console.log("Delete");
    }
  }
}
