import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import * as fromFiltersAction from '../../filter/filter.actions';
import * as fromToDoAction from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  public pendientes: number;
  public todos: Todo[];

  public filtrosValidos: fromFiltersAction.FiltersValid[] = ['todos', 'completados', 'pendientes'];
  public filtroActual: fromFiltersAction.FiltersValid;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    });
  }

  filtrarToDos( filtro: fromFiltersAction.FiltersValid ) {

    this.filtroActual = filtro;

    const accion = new fromFiltersAction.SetFilterAction(filtro);
    this.store.dispatch(accion);
  }

  deleteCompletados() {

    const accion = new fromToDoAction.DeleteToDoAction(this.todos);
    this.store.dispatch(accion);
  }
}
