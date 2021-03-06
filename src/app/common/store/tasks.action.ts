import {Action} from '@ngrx/store';
import {TasksState} from './tasks.store';
import {TaskModel} from '../models/task.model';

export const TasksActionTypes = {
  LOAD: '[tasks] Load',
  UPDATE_TASK: '[tasks] update task',
  CREATE_TASK: '[tasks] create task'
};

export class LoadTasks implements Action {
  readonly type = TasksActionTypes.LOAD;

  constructor(public payload: TasksState) {
  }
}

export class UpdateTask implements Action {
  readonly type = TasksActionTypes.UPDATE_TASK;

  constructor(public payload: TaskModel) {
  }
}

export class CreateTask implements Action {
  readonly type = TasksActionTypes.CREATE_TASK;

  constructor(public payload: TaskModel) {
  }
}

export type TasksActions = LoadTasks | UpdateTask | CreateTask;

