import {Injectable} from '@angular/core';
import {TaskModel} from './models/task.model';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.store';
import {CreateTask, LoadTasks, UpdateTask} from './store/tasks.action';


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

  getTask(id: number): TaskModel {
    let task: TaskModel;
    this.store.select('tasksState').subscribe(state => {
      task = state.tasks.find(x => x.id === id);
    });
    return task;
  }

  createTask(title: string, description: string) {

    const task: TaskModel = {
      id: this.getNextID(),
      completed: false,
      title: title,
      description: description
    };

    this.http.post<TaskModel>(`${this.BASE_URL}`, task)
      .subscribe((newTask) => this.store.dispatch(new CreateTask(newTask)));
  }

  /*
   * this should be done server side, but convenient for the purpose a the exercise
   */
  getNextID(): number {

    let idMax: number;

    this.store.select('tasksState')
      .subscribe(state => idMax = Math.max(...state.tasks.map(x => x.id))
      );

    return idMax + 1;
  }

}
