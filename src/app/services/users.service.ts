import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class UsersService{
	
  private users:User[] = [];
	
	apiURL = 'http://localhost/jlplanilla/public';
	
	constructor(private http: HttpClient){
	}
	
	handleError(error) {
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
		} else {
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}

	getUsers(): Observable<User> {
		return this.http.get<User>(this.apiURL + '/getUsers')
		.pipe(
			retry(1),
			catchError(this.handleError)
		)
	}
	
	getUser(username): Observable<User> {
		return this.http.get<User>(this.apiURL + '/getUser/' + username)
		.pipe(
			retry(1),
			catchError(this.handleError)
		)
	} 

}

export interface User{
	id:string;
	group_id:string;
	username:string;
	email:string;
	first_name:string;
	last_name:string;
	avatar:string;
	active:string;
	login_attempt:string;
	last_login:string;
	created_at:string;
	updated_at:string;
	reminder:string;
	activation:string;
	last_activity:string;
}