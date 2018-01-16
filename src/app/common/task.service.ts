import {Injectable} from '@angular/core';
import {TaskModel} from './models/task.model';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.store';
import {LoadTasks, UpdateTask} from './store/tasks.action';


@Injectable()
export class TaskService {

  private BASE_URL = '/api/tasks';

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  loadTasks() {
    this.http.get<Array<TaskModel>>(this.BASE_URL)
      .subscribe(tasks => this.store.dispatch(new LoadTasks({tasks: tasks})));
  }

  updateTask(taskModel: TaskModel) {
    this.http.put(`${this.BASE_URL}/${taskModel.id}`, JSON.stringify(taskModel))
      .subscribe(() => this.store.dispatch(new UpdateTask(taskModel)));
  }

}
