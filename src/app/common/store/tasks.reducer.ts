import {TasksActions, TasksActionTypes} from './tasks.action';
import {TasksState} from './tasks.store';


export function tasksReducer(state: TasksState, action: TasksActions) {

  switch (action.type) {
    case TasksActionTypes.LOAD: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
