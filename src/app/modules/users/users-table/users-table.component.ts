import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppState } from 'src/app/store/app-state.interface';
import { UserActions } from 'src/app/store/users/actions/user.actions';
import { UserModel } from 'src/app/store/users/models/user.model';
import { selectUsers } from 'src/app/store/users/selectors/user.selectors';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  @Input() public set filter(value: string) {
    this.filter$.next(value);
  }

  public filter$: BehaviorSubject<string> = new BehaviorSubject('');
  public displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'birthDate',
    'phone',
    'city',
    'street',
    'number',
    'menu',
  ];

  public dataSource$: Observable<UserModel[]>;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUsers());

    this.dataSource$ = combineLatest([
      this.store.select(selectUsers),
      this.filter$,
    ]).pipe(
      map(([data, filter]) => {
        return (data || []).filter((user: UserModel) =>
          new RegExp(filter).test(user.name)
        );
      })
    );
  }

  public handleAdd(): void {
    const dialogRef = this.dialog.open(UserDialogComponent);
  }

  public handleEdit(user: UserModel): void {
    const dialogRef = this.dialog.open(UserDialogComponent, { data: user });
  }

  public handleDelete(user: UserModel): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result: boolean) => {
        if (result) {
          this.store.dispatch(UserActions.deleteUser({ payload: user.id }));
        }
      });
  }
}
