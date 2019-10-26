import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'users', component: UsersComponent },
	/* { path: 'heroe/:id', component: HeroeComponent }, */
	{ path: '**', patMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);