import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';
import { UserModel } from '../models/user.model';

export const userReducerInitialState: UserModel[] = null;

const reducer = createReducer(
  userReducerInitialState,
  on(UserActions.getUsersSuccess, (state, { payload }) => {
    return payload;
  }),
  on(UserActions.deleteUser, (state, { payload }) => {
    return [...state].filter((user: UserModel) => user.id !== payload);
  }),
  on(UserActions.createUser, (state, { payload }) => {
    return [...state, payload];
  }),
  on(UserActions.updateUser, (state, { payload }) => {
    return [...state].map((user: UserModel) =>
      user.id === payload.id ? payload : user
    );
  })
);

export function userReducer(state: UserModel[], action: Action) {
  return reducer(state, action);
}
