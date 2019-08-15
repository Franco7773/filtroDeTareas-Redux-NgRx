import * as fromTODO from './todo.actions';
import { Todo } from './model/todo.model';

const estadoInicial: Todo[] = [];

export function todoReducer( state: Todo[] = estadoInicial, action: fromTODO.Actions ): Todo[] {

  switch (action.type) {

    case fromTODO.AGREGAR:
      const todo = new Todo( action.texto );
      return [ ...state, todo ];
    case fromTODO.TOGGLE:
      return state.map( todoEdit => {

        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });
    case fromTODO.EDITAR:
      return state.map( todoEdit => {

        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });
    case fromTODO.ELIMINAR:
      return state.filter( todoEdit => todoEdit.id !== action.id )
    case fromTODO.TOGGLEALL:
      return state.map( todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });
    case fromTODO.DELETEALL:
      return state.filter( toDo => !toDo.completado );
    default:
      return state;
  }
}
