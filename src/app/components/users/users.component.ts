import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service'; 

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

	users:User[]=[];

	constructor(private _usersService:UsersService) {}

	ngOnInit() {
		this.loadEmployees();
	}
	
	loadEmployees() {
		return this._usersService.getUsers().subscribe((data: {}) => {
			this.users = data;
		})
	}

}