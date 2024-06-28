import { State, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { deleteTodo, create, edit, toggle, toggleAll, cleanTodos } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Ir al super'),
  new Todo('Leer'),
  new Todo('Salir a caminar'),
];

const _todoReducer = createReducer(
  estadoInicial,

  on(create, (state, { text }) => [...state, new Todo(text)]),

  on(cleanTodos, state => state.filter( todo => !todo.completed )),

  on( deleteTodo, ( state, { id } ) => state.filter( todo => todo.id !== id)),

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

  on(edit, (state, { id, text }) => {
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
