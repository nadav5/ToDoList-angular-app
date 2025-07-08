import { Injectable } from '@angular/core';
import { Task } from '../../interface/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private tasks: Task[] = [];
  private counterId = 1;

  getTasks(): Task[] {
    return this.tasks;
  }
  addTask(name: string, description: string): void {
    const task: Task = {
      id: this.counterId++,
      title: name,
      description,
      isDone: false
    };
    this.tasks.push(task);
    console.log(name);
  }
}
