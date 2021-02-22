import { ActionReducerMap } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { userReducer } from './user-reducer';

export interface UserState {
  users: UserModel[];
}

export const userReducers: ActionReducerMap<UserState> = {
  users: userReducer,
};
