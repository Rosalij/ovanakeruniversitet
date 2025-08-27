import { Routes } from '@angular/router';
import { Loginform } from './loginform/loginform';
import { Home } from './home/home';

export const routes: Routes = [
{ path: '', component: Loginform },
{ path: 'home', component: Home}
];

