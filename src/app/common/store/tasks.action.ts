import {Action} from '@ngrx/store';
import {TasksState} from './tasks.store';

export const TasksActionTypes = {
  LOAD: '[tasks] Load'
};

export class LoadTasks implements Action {
  readonly type = TasksActionTypes.LOAD;

  constructor(public payload: TasksState) {
  }
}

export type TasksActions = LoadTasks;
