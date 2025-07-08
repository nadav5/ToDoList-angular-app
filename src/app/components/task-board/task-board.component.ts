import { Component, OnInit } from '@angular/core';
import { Task } from '../../../app/interface/task.model';
import { TaskApiService } from 'src/app/services/task-api.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskApiService: TaskApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskApiService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (err) => {
        console.error('Failed to load tasks', err);
      }
    });
  }

  onDeleteTask(task: Task): void {
    this.taskApiService.deleteTask(task.id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (err) => {
        console.error('Failed to delete task', err);
      }
    });
  }
}
