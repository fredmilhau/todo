import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskDetailComponent} from './task-detail.component';
import {TaskService} from '../common/task.service';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {MatCardModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {tasksReducer} from '../common/store/tasks.reducer';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let taskService: TaskService;

  class MockTaskService {
    getTask(id: number) {
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailComponent],
      imports: [
        MatCardModule,
        RouterTestingModule
      ],
      providers: [
        {provide: TaskService, useClass: MockTaskService},
        {
          provide: ActivatedRoute,
          useValue: {params: Observable.of({id: 2})}
        }
      ]
    })
      .compileComponents();

    taskService = TestBed.get(TaskService);
    spyOn(taskService, 'getTask');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: should call getTask

  // TODO: should retrieve the id in the url

  // TODO: should display the title and description of the task

});
