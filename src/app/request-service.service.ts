import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from 'src/entity/user';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {



  constructor(private client: HttpClient) {}


  
  findUsers():  Observable<any>  {
  return this.client.get<User []>("http://localhost:9001/users")   
  
  }

  postUser(user: User){
    const headers = {'Content-Type': "application/json"}
    const body = { firstName: user.firstName, lastName: user.lastName}
    this.client.post<User>("http://localhost:9001/users", body, {headers}).subscribe(data => console.log(data))
  }
}
