import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

import { UsersService } from './services/users.service'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
	APP_ROUTING,
	HttpClientModule
  ],
  providers: [
	UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
