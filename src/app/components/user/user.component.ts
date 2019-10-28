import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService, User } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	user:User={};

  constructor(private activatedRoute:ActivatedRoute, private _usersService:UsersService) { 
	this.activatedRoute.params.subscribe( params=>{
		this.loadUser(params['username']);
	} )
  }
  
	loadUser(username) {
		return this._usersService.getUser(username).subscribe((data: {}) => {
			this.user = data;
		})
	}

}
