import { State, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Ir a una fiesta'),
  new Todo('Vencer un villano')
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo( texto )])
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
