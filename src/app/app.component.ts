import { Component } from '@angular/core';
import { User } from 'src/entity/user';
import { USERS } from 'src/utility/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'SecondAngularApp';
  users: User[] = [];

  //col ? può essere user ma anche undefined, non null però
  selectedUser?: User = undefined;
  icon = "https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"

  ngOnInit(): void {
    this.users = USERS  
  }

  onSelectedUser(user: User){
    this.selectedUser = user;
  }
//padre riceve il pacco dal postino
  onNewUser(user: User){
    this.users.push(user);

  }

//intercetto un evento, 
//ad es quello che scrivo sul browser 
  onKeyUp(event: KeyboardEvent){
    console.log(event.key)
  }


}

