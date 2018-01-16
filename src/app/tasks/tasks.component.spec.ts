import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TasksComponent} from './tasks.component';
import {AppState} from '../common/store/app.store';
import {Store, StoreModule} from '@ngrx/store';
import {tasksReducer} from '../common/store/tasks.reducer';
import {LoadTasks} from '../common/store/tasks.action';
import {TaskService} from '../common/task.service';
import {By} from '@angular/platform-browser';
import {TaskComponent} from '../task/task.component';
import {MatCardModule, MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AddTaskComponent} from '../add-task/add-task.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let store: Store<AppState>;
  let taskService: TaskService;


  class MockTaskService {
    loadTasks() {
    }
  }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        TasksComponent,
        TaskComponent,
        AddTaskComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot({tasksState: tasksReducer}),
        MatCardModule,
        MatCheckboxModule,
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: TaskService, useClass: MockTaskService}
      ]
    })
      .compileComponents();

    taskService = TestBed.get(TaskService);
    spyOn(taskService, 'loadTasks');

    store = TestBed.get(Store);
    // init the store
    store.dispatch(new LoadTasks({tasks: []}));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of items after the data is loaded', () => {

    const mockTasks = [{
      id: 0,
      completed: false,
      title: 'taskToDo0',
      description: 'task to do 0'
    },
      {
        id: 1,
        completed: false,
        title: 'taskToDo1',
        description: 'task to do 1'
      }
    ];

    // init the store with previous mock
    store.dispatch(new LoadTasks({tasks: mockTasks}));

    component.tasks$.subscribe(data => {
      expect(data.length).toBe(mockTasks.length);
    });

    fixture.detectChanges();

    const taskNodes = fixture.debugElement.queryAll(By.css('ta-task'));
    expect(taskNodes.length).toBe(2);
  });

});
