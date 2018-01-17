import {TasksActionTypes} from './tasks.action';
import {TasksState} from './tasks.store';
import {TaskModel} from '../models/task.model';


export function tasksReducer(state: TasksState, action: any) {
  switch (action.type) {
    case TasksActionTypes.LOAD: {
      return action.payload;
    }
    case TasksActionTypes.UPDATE_TASK: {
      return update(state, action.payload);
    }
    case TasksActionTypes.CREATE_TASK: {
      return {...state, tasks: [action.payload, ...state.tasks]};
    }
    default: {
      return state;
    }
  }


}


function update(state: TasksState, task: TaskModel): TasksState {

  let tasks: Array<TaskModel>;

  // if the modified task is completed
  if (task.completed) {

    // delete old task
    tasks = state.tasks.filter(x => x.id !== task.id);

    // add the new task at the end of the array
    tasks.push(task);

  } else {
    // replace old task by the new one
    tasks = state.tasks.map(x => x.id === task.id ? task : x);
  }

  return {...state, tasks: tasks};
}


