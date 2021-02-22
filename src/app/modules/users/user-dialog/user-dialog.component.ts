import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';
import { UserActions } from 'src/app/store/users/actions/user.actions';
import { UserModel } from 'src/app/store/users/models/user.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {
  public editMode: boolean;
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserModel,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.editMode = Boolean(this.data);

    this.form = new FormGroup({
      id: new FormControl(new Date().getTime()),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
    });

    if (this.editMode) {
      this.form.patchValue(this.data);
    }
  }

  public saveForm(): void {
    const newUser: UserModel = new UserModel({ ...this.form.value });

    if (this.editMode) {
      this.store.dispatch(UserActions.updateUser({ payload: newUser }));
    } else {
      this.store.dispatch(UserActions.createUser({ payload: newUser }));
    }

    this.dialogRef.close();
  }
}
