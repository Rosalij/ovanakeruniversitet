import { Routes } from '@angular/router';
import { Loginform } from './loginform/loginform';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { Yourcourses } from './yourcourses/yourcourses';
 
export const routes: Routes = [
{ path: '', component: Loginform },
{ path: 'home', component: Home },
{ path: 'courses', component: Courses },
{ path: 'yourcourses', component: Yourcourses}
];

