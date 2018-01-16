import {Injectable} from '@angular/core';
import {TaskModel} from './models/task.model';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.store';
import {LoadTasks} from './store/tasks.action';


@Injectable()
export class TaskService {

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  loadTasks() {
    this.http.get<Array<TaskModel>>('/api/tasks')
      .subscribe(tasks => this.store.dispatch(new LoadTasks({tasks: tasks})));
  }

}
