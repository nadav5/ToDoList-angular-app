import { Injectable } from '@angular/core';
import { Task } from '../../interface/task.model';

@Injectable({ providedIn: 'root' })
export class MarkAsDoneService {
  markAsDone(task: Task): void {
     task.isDone = true;
    console.log("Task:", task.title, " is done!");
  }
}
