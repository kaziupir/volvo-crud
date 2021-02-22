import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public filterValue: string = '';

  public handleInputChange(value: string): void {
    this.filterValue = value;
  }
}
