import { createAction, props } from '@ngrx/store';


export type validFilters = 'todos'|'completed'|'pending';

export const setFilter = createAction(
  '[Filtro] Set Filtro',
  props<{ filter: validFilters}>()
)

