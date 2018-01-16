import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {StoreModule} from '@ngrx/store';
import {tasksReducer} from './common/store/tasks.reducer';
import {TaskService} from './common/task.service';
import {HttpBackend, HttpClientModule} from '@angular/common/http';
import {MockedBackend} from './common/mocked-backend';
import {TaskComponent} from './task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({tasksState: tasksReducer}),
    MatToolbarModule,
    MatCardModule
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
