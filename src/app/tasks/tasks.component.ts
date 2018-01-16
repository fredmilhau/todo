import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../common/models/task.model';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {TaskService} from '../common/task.service';
import {AppState} from '../common/store/app.store';
import 'rxjs/add/operator/map';


@Component({
  selector: 'ta-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks$: Observable<Array<TaskModel>>;

  constructor(private store: Store<AppState>, private taskService: TaskService) {
    this.tasks$ = store.select('tasksState').map(tasksState => tasksState.tasks);
  }

  ngOnInit() {
    // load server's data into the store
    this.taskService.loadTasks();
  }

}
