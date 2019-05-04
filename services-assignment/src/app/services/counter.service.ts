import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countFromActiveToInactive = 0;
  countFromInactiveToActive = 0;

  constructor() {
  }
}
