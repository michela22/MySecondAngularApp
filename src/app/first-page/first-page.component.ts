import { Component, OnInit } from '@angular/core';
import { User } from 'src/entity/user';
import { USERS } from 'src/utility/constants';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {


  users: User[] = [];

  //col ? può essere user ma anche undefined, non null però
  selectedUser?: User = undefined;
  icon = "https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
  
  //serve per la richiesta http
  constructor(private service: RequestServiceService){}

  ngOnInit(): void {
    //prendo utenti da richiesta http, dal nostro db.json creato prima con npm init e npm install json-server
    this.service.findUsers().subscribe(data => this.users=data)
    //prende utenti da una costante
    this.users = USERS  
  }

  onSelectedUser(user: User){
    this.selectedUser = user;
  }
//padre riceve il pacco dal postino
  onNewUser(user: User){
    this.service.postUser(user);
    this.users.push(user);

  }

//intercetto un evento, 
//ad es quello che scrivo sul browser 
  onKeyUp(event: KeyboardEvent){
    console.log(event.key)
  }


}




