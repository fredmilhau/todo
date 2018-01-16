import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTaskComponent} from './add-task.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {TaskService} from '../common/task.service';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let taskService: TaskService;

  class MockTaskService {
    createTask() {
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [
        FormsModule,
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createTask when submiting form', () => {
    spyOn(taskService, 'createTask');
    component.title = 'title';
    fixture.nativeElement.querySelector('button').click();

    // FIXME: test not functional
    // expect(taskService.createTask).toHaveBeenCalled();
  });
});
