import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  public getUsers(): Observable<{ names: UserModel[] }> {
    return this.http.get<{ names: UserModel[] }>('assets/db.json');
  }

  constructor(private http: HttpClient) {}
}
