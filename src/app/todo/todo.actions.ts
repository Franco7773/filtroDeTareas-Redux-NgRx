import { Action } from '@ngrx/store';
import { Todo } from './model/todo.model';

export const AGREGAR = '[TODO] Agregar todo';
export const TOGGLE = '[TODO] Toggle todo';
export const EDITAR = '[TODO] Editar todo';
export const ELIMINAR = '[TODO] Eliminar todo';
export const TOGGLEALL = '[TODO] Toggle ALL';
export const DELETEALL = '[TODO] Delete ALL';

export class AgregarToDoAction implements Action {

  readonly type = AGREGAR;

  constructor( public texto: string ) { }
}

export class ToggleToDoAction implements Action {

  readonly type = TOGGLE;

  constructor( public id: number ) { }
}

export class ToggleAllToDoAction implements Action {

  readonly type = TOGGLEALL;

  constructor( public completado: boolean ) { }
}

export class EditarToDoAction implements Action {

  readonly type = EDITAR;

  constructor( public id: number, public texto: string ) { }
}

export class EliminarToDoAction implements Action {

  readonly type = ELIMINAR;

  constructor( public id: number ) { }
}


export class DeleteToDoAction implements Action {

  readonly type = DELETEALL;

  constructor( public todos: Todo[] ) { }
}

export type Actions = AgregarToDoAction |
                      ToggleToDoAction |
                      ToggleAllToDoAction |
                      EditarToDoAction |
                      EliminarToDoAction |
                      DeleteToDoAction;
