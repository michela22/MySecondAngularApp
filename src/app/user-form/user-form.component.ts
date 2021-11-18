import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/entity/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //FORM

 // private formBuilder: FormBuilder;
 //mando dati al padre
 @Output() emitter: EventEmitter<User> = new EventEmitter();

  userForm: FormGroup ; //farai il binding nello html con questo

  error?: string;

  constructor( builder: FormBuilder) {
    //this.formBuilder=builder;
    this.userForm= builder.group({ //se metto più validators li devo mettere dentro un array
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]]
    });
   }

  
   // END FORM

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    console.log(`Valido? ${this.userForm.valid}`)
   if(this.userForm.valid){
     const user = new User(this.userForm.get('firstName')!.value, this.userForm.get('lastName')!.value);//ho creato il pacco
     this.emitter.emit(user);//notifica al padre che ha un nuovo oggetto da passargli, è il postino
     this.userForm.reset();
     this.error=undefined;
   }else{
    this.error="Errore durante l'inserimento"
   }
  }
}
