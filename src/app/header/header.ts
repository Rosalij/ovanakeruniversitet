
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  imports: [ CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}