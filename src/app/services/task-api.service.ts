import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interface/task.model';
import { ApiResponse } from '../interface/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  private readonly baseUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }


  public addTask(title: string, description: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, { title, description });
  }

  public markAsDone(id: number): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/${id}`, {});
  }



  public deleteTask(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
  }
}
