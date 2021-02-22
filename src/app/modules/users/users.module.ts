import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { TableToolbarComponent } from './table-toolbar/table-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    TableToolbarComponent,
    DeleteUserDialogComponent,
    UserDialogComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
