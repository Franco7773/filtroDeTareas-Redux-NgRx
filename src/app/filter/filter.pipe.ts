import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { FiltersValid } from './filter.actions';


@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: FiltersValid): Todo[] {

    switch (filter) {
      case 'completados':
        return todos.filter( todo => todo.completado );
      case 'pendientes':
        return todos.filter( todo => !todo.completado );
      default:
        return todos;
    }
  }
}
