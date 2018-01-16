import {TestBed, inject} from '@angular/core/testing';

import {TaskService} from './task.service';
import {Store, StoreModule} from '@ngrx/store';
import {tasksReducer} from './store/tasks.reducer';
import {MockedBackend} from './mocked-backend';
import {HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppState} from './store/app.store';
import {TaskModel} from './models/task.model';
import {TASKS} from './mock.tasks';

describe('TaskService', () => {

  let store: Store<AppState>;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({tasksState: tasksReducer})
      ],
      providers: [TaskService,
        {
          provide: HttpBackend, useClass: MockedBackend
        }
      ]
    });

    store = TestBed.get(Store);

    http = TestBed.get(HttpClient);
    spyOn(http, 'get').and.callThrough();
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('should load tasks from http (mockedbackend) to the store', inject([TaskService], (service: TaskService) => {

    service.loadTasks();

    expect(http.get).toHaveBeenCalled();

    let tasks: Array<TaskModel>;

    store.select('tasksState').subscribe(state => tasks = state.tasks);

    expect(tasks).toEqual(TASKS);
  }));

});
