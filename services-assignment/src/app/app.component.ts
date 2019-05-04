import {Component} from '@angular/core';
import {UsersService} from './services/users.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private usersService: UsersService, private counterService: CounterService) {
    usersService.activeUsers.push('Max');
    usersService.activeUsers.push('Anna');
    usersService.inactiveUsers.push('Chris');
    usersService.inactiveUsers.push('Manu');
  }

}
