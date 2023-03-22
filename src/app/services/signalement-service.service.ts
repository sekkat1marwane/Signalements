import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Signalement } from '../models/signalement.model';

@Injectable({
  providedIn: 'root'
})
export class SignalementService {

  private signalementStream = new Subject<Signalement>();
  signalementToSave = this.signalementStream.asObservable();
 
  constructor() {
 
  }
  sendSignalement(signalement: Signalement) {
    this.signalementStream.next(signalement);
  }
}
