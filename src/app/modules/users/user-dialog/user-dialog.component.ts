import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<UserDialogComponent>
  ) {}

  ngOnInit(): void {
    this.editMode = Boolean(this.data);

    this.form = new FormGroup({
      id: new FormControl(),
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
    console.log(newUser);
    this.dialogRef.close();
  }
}
