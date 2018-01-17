import {TasksComponent} from './tasks/tasks.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';

export const ROUTES = [
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/:id', component: TaskDetailComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tasks'
  }
];
