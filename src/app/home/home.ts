import { Component } from '@angular/core'
import { HeaderComponent } from '../header/header';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
