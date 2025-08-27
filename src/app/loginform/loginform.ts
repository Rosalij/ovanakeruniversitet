import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  imports: [ FormsModule, CommonModule 
  ],
  templateUrl: './loginform.html',
  styleUrl: './loginform.scss'
})
export class Loginform {

  username: string = '';
  password: string = '';
errorMsg: string = '';

  constructor(private router: Router) {}

  navigateToHome() {
    if (!this.username || !this.password) {
      this.errorMsg = 'Felaktigt användarnamn eller lösenord';
    } else {
      this.errorMsg = '';
      this.router.navigate(['/home']);
    }
  }
}
