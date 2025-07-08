import { Component, ViewChild } from '@angular/core';
import { TaskApiService } from './services/task-api.service';
import { TaskBoardComponent } from './components/task-board/task-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  @ViewChild(TaskBoardComponent) taskBoard!: TaskBoardComponent;

  constructor(private taskApiService: TaskApiService) {}

  public addTask(name: string, description: string): void {
    this.taskApiService.addTask(name, description).subscribe({
      next: (res) => {
        console.log('Task added!', res);
        this.taskBoard.loadTasks(); 
      },
      error: (err) => {
        console.error('Failed to add task', err);
      }
    });
  }
}
