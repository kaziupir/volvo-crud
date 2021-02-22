import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { UserState } from '../reducers/user.reducers';

export const USER_FEATURE_SELECTOR = 'users';

export const selectUsersState = createFeatureSelector(USER_FEATURE_SELECTOR);

export const selectUsers = createSelector(
  selectUsersState,
  (state: UserState) => (state ? state.users : null)
);
