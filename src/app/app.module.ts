import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import{HttpClientModule} from '@angular/common/http';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    SecondPageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
