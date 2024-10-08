import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {CreateUserDto, UserDto} from '../models/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient);
  usersApiUrl = `${environment.apiUrl}/users`;

  usersData = new BehaviorSubject<UserDto[]>([])

  constructor() { }

  getUsers(): Observable<UserDto[]>{
    return this.http.get<UserDto[]>(this.usersApiUrl)
      .pipe(tap(users => this.usersData.next(users)));
  }

  createUser(createUserDto: CreateUserDto): Observable<UserDto>{
    return this.http.post<UserDto>(this.usersApiUrl, createUserDto)
      .pipe(tap(user => this.usersData.next([...this.usersData.value, user])));
  }
}
