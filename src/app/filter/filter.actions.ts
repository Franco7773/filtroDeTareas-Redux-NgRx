import { Action } from '@ngrx/store';

export type FiltersValid = 'todos' | 'completados' | 'pendientes';

export const SET_FILTER = '[FILTER] Set filtre';

export class SetFilterAction implements Action {

  readonly type = SET_FILTER;

  constructor( public filtro: FiltersValid ) { }
}

export type Actions = SetFilterAction;
