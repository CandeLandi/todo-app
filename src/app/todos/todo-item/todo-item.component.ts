import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(valor => {
      console.log(valor);
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editing = true;
    this.txtInput.setValue( this.todo.text )

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editing = false;

    if( this.txtInput.invalid ) { return; }
    if( this.txtInput.value === this.todo.text )

    this.store.dispatch(
      actions.edit({
        id: this.todo.id,
        text: this.txtInput.value
      })
    )
  }

  borrar(){

    this.store.dispatch( actions.deleteTodo({ id: this.todo.id }))

  }
}
