import { Component } from '@angular/core'
import { HeaderComponent } from '../header/header';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
