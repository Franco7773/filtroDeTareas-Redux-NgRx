import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilters from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filtro: fromFilterActions.FiltersValid;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFilters.filterReducer
};
