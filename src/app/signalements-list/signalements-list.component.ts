import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {  Signalement } from '../models/signalement.model';
import { SignalementService } from '../services/signalement-service.service';
import { SignalementUpdateService } from '../services/signalement-update.service';

@Component({
  selector: 'app-signalements-list',
  templateUrl: './signalements-list.component.html',
  styleUrls: ['./signalements-list.component.scss']
})
export class SignalementsListComponent{


  signalements : Signalement[] =[];


  dataSource: MatTableDataSource<Signalement> = new MatTableDataSource<any>();

  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'sexe','email' ,'description', 'observations', 'actions'];

  constructor(private signalementService : SignalementService, private signalementUpdateService : SignalementUpdateService) {

    this.signalementService.signalementToSave.subscribe(sign => {
        const signalementToModify = this.signalements.find(s => s.author.id === sign.author.id);
        if(signalementToModify){
          const index = this.signalements.indexOf(signalementToModify);
          this.updateSignalement(index , sign);  
        }else{
          this.signalements.push(sign);
        } 
        this.dataSource.data = this.signalements;
    });


   }


  updateSignalement(index: number, signalementUpdated:Signalement) {
   {
      this.signalements[index].author.id =signalementUpdated.author.id ; 
      this.signalements[index].author.firstName = signalementUpdated.author.firstName;
      this.signalements[index].author.lastName = signalementUpdated.author.lastName;
      this.signalements[index].author.sexe = signalementUpdated.author.sexe;
      this.signalements[index].author.birthDate = signalementUpdated.author.birthDate;
      this.signalements[index].description = signalementUpdated.description;
      this.signalements[index].observations = signalementUpdated.observations;

    }


  }

  modifySignalement(index : number){  
    this.signalementUpdateService.sendSignalementToUpdate(this.signalements[index]);
  }


  deleteSignalement(index : number){
    this.signalements.splice(index,1);
    this.dataSource.data = this.signalements;
  }
}
