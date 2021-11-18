import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/entity/user';

@Component({
  selector: 'app-user-list', //devo metterlo dentro html del mio componentecon cui deve parlare
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  /*padre parla col filgio,
   recupera i dati (gli user) e li passa figlio
 perchè potrebbe avere più componenti figli a cui servono
  gli stessi dati */
  @Input() users?: User[];

  //adesso devo fare l'inverso
  //perchè voglio un EventEmitter
  //dico al padre che sto mandando dei dati
  @Output() selectedUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickItem(event: Event ,user: User){
    //con target esce su console 
    //del browser l'elemtno con relativo tag
    console.log(event.target); 
    //quì ho solo testo
    console.log((<HTMLElement>event.target).innerText);
    //quì ho l'oggetto relativo a quello che ho cliccato!
    console.log(user);
    //this.selectedUser=user;

    //notifico al padre che qualcosa è pronto per essere recuperato
    this.selectedUser.emit(user);
  }

}
