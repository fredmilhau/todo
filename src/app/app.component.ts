import {Component, OnInit} from '@angular/core';
import {TaskService} from './common/task.service';

@Component({
  selector: 'ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    // load server's data into the store
    this.taskService.loadTasks();
  }

}
