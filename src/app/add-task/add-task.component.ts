import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../common/models/task.model';
import {TaskService} from '../common/task.service';

@Component({
  selector: 'ta-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  title = '';
  description = '';


  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  addTask() {
    this.taskService.createTask(this.title, this.description);
  }

}

