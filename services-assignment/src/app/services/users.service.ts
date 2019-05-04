import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor() {
  }
}
