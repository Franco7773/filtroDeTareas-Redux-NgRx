import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleToDoAction, EditarToDoAction, EliminarToDoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input('tarea') public todo: Todo;
  @ViewChild('txtInputFisico', { static: true }) txtInputFisico: ElementRef;

  public editando: boolean;

  chkField: FormControl;
  txtInput: FormControl;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe( () => { const accion = new ToggleToDoAction( this.todo.id ); this.store.dispatch(accion); });
  }

  editar(): void {
    this.editando = true;

    setTimeout(() => this.txtInputFisico.nativeElement.select(), 7);
  }

  terminarEdicion(): void {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    } else if (this.txtInput.value === this.todo.texto) {
      return;
    } else {

      const accion = new EditarToDoAction( this.todo.id, this.txtInput.value );
      this.store.dispatch(accion);
    }
  }

  borrarTodo() {
    
    const accion = new EliminarToDoAction( this.todo.id );
    this.store.dispatch(accion);
  }

}
