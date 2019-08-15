import * as fromFilters from './filter.actions';

const estadoInicial: fromFilters.FiltersValid = 'todos';

export function filterReducer( state = estadoInicial, action: fromFilters.Actions ): fromFilters.FiltersValid {

  switch (action.type) {
    case fromFilters.SET_FILTER:
      return action.filtro;
    default:
      return state;
  }
}
