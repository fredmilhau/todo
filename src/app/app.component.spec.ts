import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material';
import {AppModule} from './app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {TaskService} from './common/task.service';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let taskService: TaskService;

  class MockTaskService {
    loadTasks() {
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule, MatToolbarModule, MatCardModule, RouterTestingModule
      ],
      providers: [
        {provide: TaskService, useClass: MockTaskService}
      ]
    }).compileComponents();

    taskService = TestBed.get(TaskService);
    spyOn(taskService, 'loadTasks');

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('TODO APP');
  }));

  it('should have a outlet element', () => {
    const element = fixture.nativeElement;
    const routerOutlet = element.querySelector('router-outlet');
    expect(routerOutlet).not.toBeNull();
  });

  it('should call TaskService to load data', () => {
    expect(taskService.loadTasks).toHaveBeenCalled();
  });

});
