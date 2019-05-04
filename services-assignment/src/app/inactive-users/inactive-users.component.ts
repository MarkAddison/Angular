import {Component} from '@angular/core';
import {UsersService} from '../services/users.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  onSetToActive(id: number) {
    this.usersService.activeUsers.push(this.usersService.inactiveUsers[id]);
    this.usersService.inactiveUsers.splice(id, 1);
    this.counterService.countFromInactiveToActive++;
  }
}
