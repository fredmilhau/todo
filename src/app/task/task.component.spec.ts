import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskComponent} from './task.component';
import {By} from '@angular/platform-browser';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should diplay title and state of the input taskModel', () => {

    component.taskModel = {
      id: 1,
      completed: true,
      title: 'taskCompleted1',
      description: 'task completed 1'
    };

    fixture.detectChanges();

    let stateEl = fixture.debugElement.query(By.css('.state')).nativeElement;
    expect(stateEl.innerHTML).toContain('[done]');

    let titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(titleEl.innerHTML).toContain('taskCompleted1');


    component.taskModel = {
      ...component.taskModel,
      completed: false,
      title: 'some title',
    };

    fixture.detectChanges();

    stateEl = fixture.debugElement.query(By.css('.state')).nativeElement;
    expect(stateEl.innerHTML).toContain('[todo]');

    titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(titleEl.innerHTML).toContain('some title');
  });

});
