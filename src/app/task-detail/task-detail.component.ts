import {Component, Input, OnInit} from '@angular/core';
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

  @Input()
  taskModel: TaskModel;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.taskModel = this.taskService.getTask(id);
  }

}
