import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/store/users/models/user.model';

const data: UserModel[] = [
  {
    id: 1,
    name: 'name0',
    surname: 'surname0',
    birthDate: '24-8-1981',
    phone: '634523125',
    city: 'Wroclaw',
    street: 'Mydlana',
    number: 1,
  },
  {
    id: 2,
    name: 'name1',
    surname: 'surname1',
    birthDate: '28-9-1983',
    phone: '812312312',
    city: 'Warsaw',
    street: 'Domaniewska',
    number: 2,
  },
  {
    id: 3,
    name: 'name2',
    surname: 'surname2',
    birthDate: '01-6-1986',
    phone: '987654412',
    city: 'Wroclaw',
    street: 'Mydlana',
    number: 3,
  },
  {
    id: 4,
    name: 'name3',
    surname: 'surname3',
    birthDate: '05-5-1978',
    phone: '812312312',
    city: 'Wroclaw',
    street: 'Himalajska',
    number: 4,
  },
  {
    id: 5,
    name: 'name4',
    surname: 'surname4',
    birthDate: '05-08-1971',
    phone: '812312312',
    city: 'Wroclaw',
    street: 'Himalajska',
    number: 5,
  },
];
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

  constructor() {}

  ngOnInit(): void {
    this.dataSource$ = combineLatest([of(data), this.filter$]).pipe(
      map(([data, filter]) => {
        return data.filter((user: UserModel) =>
          new RegExp(filter).test(user.name)
        );
      })
    );
  }
}
