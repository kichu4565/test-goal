import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  onUserClick() {
    this.router.navigate(['login']);
    // Add your user navigation logic here
  }

  onAdminClick() {
    this.router.navigate(['admin']);
    // Add your admin navigation logic here
  }
}
