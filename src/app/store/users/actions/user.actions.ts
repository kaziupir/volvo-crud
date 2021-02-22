import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/user.model';

const prefix: string = '[USER]';

export class UserActions {
  public static readonly getUsers = createAction(`${prefix} GET_USERS`);
  public static readonly getUsersSuccess = createAction(
    `${prefix} GET_USERS_SUCCESS`,
    props<{ payload: UserModel[] }>()
  );
  public static readonly getUsersFailure = createAction(
    `${prefix} GET_USERS_FAILURE`
  );

  public static readonly updateUser = createAction(
    `${prefix} UPDATE_USER`,
    props<{ payload: UserModel }>()
  );

  public static readonly createUser = createAction(
    `${prefix} CREATE_USER`,
    props<{ payload: UserModel }>()
  );

  public static readonly deleteUser = createAction(
    `${prefix} DELETE_USER`,
    props<{ payload: number }>()
  );
}
