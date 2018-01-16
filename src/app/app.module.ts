import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {StoreModule} from '@ngrx/store';
import {tasksReducer} from './common/store/tasks.reducer';
import {TaskService} from './common/task.service';
import {HttpBackend, HttpClientModule} from '@angular/common/http';
import {MockedBackend} from './common/mocked-backend';
import {TaskComponent} from './task/task.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { AddTaskComponent } from './add-task/add-task.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    TaskDetailComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({tasksState: tasksReducer}),
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    TaskService,
    {
      provide: HttpBackend, useClass: MockedBackend
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
