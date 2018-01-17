import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../common/models/task.model';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../common/task.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ta-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  taskModel: TaskModel;

  unknown = false;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    const task = this.taskService.getTask(id);

    if (task !== undefined) {
      this.taskModel = this.taskService.getTask(id);
    } else {
      this.taskModel = {} as TaskModel;
      this.unknown = true;
    }
  }

}
