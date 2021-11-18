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

  ngOnInit(): void {
    this.users = USERS  
  }

  onClickItem(user: User){
    this.selectedUser=user;
  }


}

