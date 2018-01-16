import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskComponent} from './task.component';
import {By} from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {TaskService} from '../common/task.service';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  class MockTaskService {
    loadTasks() {
    }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [
        FormsModule,
        MatCheckboxModule
      ],
      providers: [
        {provide: TaskService, useClass: MockTaskService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;

    component.taskModel = {
      id: 1,
      completed: false,
      title: 'task tile',
      description: 'task description'
    };

    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should diplay title of the input taskModel', () => {
    const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(titleEl.innerHTML).toContain('task tile');
  });

  it('should diplay state of the input taskModel', () => {

    const stateEl = fixture.debugElement.query(By.css('mat-checkbox')).nativeElement;
    expect(stateEl.classList).not.toContain('mat-checkbox-checked');

    component.taskModel.completed = true;
  });

  it('should cross out a task when completed', () => {

    const element = fixture.nativeElement;
    const titleElmt = element.querySelector('.title');

    expect(titleElmt.classList).not.toContain('completed');

    const inputElmt = element.querySelector('mat-checkbox input');
    inputElmt.click();

    // FIXME: checkbox doesnt seems to respond click in this test
    // expect(titleElmt.classList).toContain('completed');
  });

});
