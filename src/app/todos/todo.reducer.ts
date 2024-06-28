import { State, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, toggle, toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Ir a una fiesta'),
  new Todo('Vencer un villano'),
];

const _todoReducer = createReducer(
  estadoInicial,

  on(crear, (state, { text }) => [...state, new Todo(text)]),

  on( borrar, ( state, { id } ) => state.filter( todo => todo.id !== id)),

  on( toggleAll, ( state, { completed } ) => state.map( todo => {

    return {
      ...todo,
      completed: completed
    }
  })),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
