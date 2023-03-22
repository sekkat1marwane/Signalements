import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Observation} from '../models/observation.model';
import { Signalement } from '../models/signalement.model';
import { SignalementService } from '../services/signalement-service.service';
import { SignalementUpdateService } from '../services/signalement-update.service';
@Component({
  selector: 'app-signalement',
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.scss']
})
export class SignalementComponent implements OnInit {

  signalementForm! : FormGroup;

  formSubmitted ! : boolean;

  isSignalementToUpdate : boolean = false;

  idSignalementToUpdate! : number;

  idTrack : number=0;
  
  observations : Observation[]= [
    {
      name : "Premiere observation"
    },
    {
      name : "Deuxième observation"
    },    {
      name : "Troisième observation"
    }
  ]

  constructor(private formBuilder : FormBuilder, private signalementService :SignalementService , private signalementUpdateService : SignalementUpdateService ) { 

    this.signalementUpdateService.signalementToUpdate.subscribe( s => {
      this.signalementForm.controls.firstName.setValue(s.author.firstName);
      this.signalementForm.controls.lastName.setValue(s.author.lastName);
      this.signalementForm.controls.birthDate.setValue(s.author.birthDate);
      this.signalementForm.controls.sexe.setValue(s.author.sexe);
      this.signalementForm.controls.email.setValue(s.author.email);
      this.signalementForm.controls.description.setValue(s.description);
      this.signalementForm.controls.observations.setValue(s.observations);
      this.isSignalementToUpdate = true;
      this.idSignalementToUpdate = s.author.id;
    })
  }

  ngOnInit(): void {
    this.signalementForm = this.formBuilder.group({
      firstName :[null,[Validators.maxLength(50), Validators.required]],
      lastName :[null,[Validators.maxLength(50),Validators.required]],
      birthDate :[null,[ Validators.required] ],
      sexe :[null,[Validators.required]],
      email :[null,[Validators.email, Validators.required]],
      description : [null, [Validators.required]],
      observations : [null]
    })
  }

  findMinDate(): Date{
    let minDate = new Date();
    minDate.setFullYear(minDate.getFullYear()-100);
    return minDate;
  }

  findMaxDate(): Date{
    let maxDate = new Date();
    return maxDate;
  }

  saveSignamlement(  formDirective: FormGroupDirective) : void{

    if(this.signalementForm.valid){
      let signalement : Signalement;
      if(this.isSignalementToUpdate){

        signalement ={
          author : {
            id : this.idSignalementToUpdate, 
            firstName : this.signalementForm.controls.firstName.value,
            lastName : this.signalementForm.controls.lastName.value,
            birthDate : this.signalementForm.controls.birthDate.value,
            sexe : this.signalementForm.controls.sexe.value,
            email : this.signalementForm.controls.email.value,
          },
          description : this.signalementForm.controls.description.value,
          observations : this.signalementForm.controls.observations.value
         };
         this.isSignalementToUpdate=false;
      }else{

      signalement ={
        author : {
          id : this.idGenerator(),
          firstName : this.signalementForm.controls.firstName.value,
          lastName : this.signalementForm.controls.lastName.value,
          birthDate : this.signalementForm.controls.birthDate.value,
          sexe : this.signalementForm.controls.sexe.value,
          email : this.signalementForm.controls.email.value,
        },
        description : this.signalementForm.controls.description.value,
        observations : this.signalementForm.controls.observations.value
       };
            }
       this.signalementService.sendSignalement(signalement);
    }
    formDirective.resetForm(); 
     }


  idGenerator(){
    this.idTrack++;
      return this.idTrack;
  }

}




