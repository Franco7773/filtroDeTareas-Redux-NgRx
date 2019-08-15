import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllToDoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public completado: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

  toggleAll() {

    this.completado = !this.completado;

    const accion = new ToggleAllToDoAction( this.completado );
    this.store.dispatch(accion);
  }
}
