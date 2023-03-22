import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Signalement } from '../models/signalement.model';

@Injectable({
  providedIn: 'root'
})
export class SignalementUpdateService {

  private signalementStream = new Subject<Signalement>();
  signalementToUpdate = this.signalementStream.asObservable();
 
  constructor() {
 
  }
  sendSignalementToUpdate(signalement: Signalement) {
    this.signalementStream.next(signalement);
  }
}
