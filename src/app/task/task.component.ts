import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../common/models/task.model';
import {TaskService} from '../common/task.service';

@Component({
  selector: 'ta-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  checked: boolean;

  @Input()
  taskModel: TaskModel;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.checked = this.taskModel.completed;
  }

  changeState() {
    this.taskModel.completed = this.checked;
    this.taskService.updateTask(this.taskModel);
  }

}
