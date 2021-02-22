import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
})
export class DeleteUserDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
