import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ovanakeruniversitet');

  constructor(private router: Router) {}

  hideHeader(): boolean {
    return this.router.url === "";
  }
}
