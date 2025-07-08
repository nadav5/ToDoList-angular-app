import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../interface/task.model';
import { TaskApiService } from 'src/app/services/task-api.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<Task>();

  constructor(private taskApiService: TaskApiService) {}

  onMarkDone() {
    this.taskApiService.markAsDone(this.task.id).subscribe({
      next: (res) => {
        console.log('Task marked as done!', res);
        this.task.isDone = true;
      },
      error: (err) => {
        console.error('Failed to mark task as done', err);
      }
    });
  }

  onDeleteTask() {
    this.deleteTask.emit(this.task);
  }
}
