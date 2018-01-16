import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../common/models/task.model';

@Component({
  selector: 'ta-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  taskModel: TaskModel;

  constructor() {
  }

  ngOnInit() {
  }

}
