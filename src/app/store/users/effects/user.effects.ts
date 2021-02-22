import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { UserActions } from '../actions/user.actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  public getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsers),
      switchMap(() => {
        return this.service.getUsers().pipe(
          map((response) => {
            return UserActions.getUsersSuccess({ payload: response.names });
          }),
          catchError(() => of(UserActions.getUsersFailure()))
        );
      })
    )
  );

  constructor(private service: UserService, private actions$: Actions) {}
}
