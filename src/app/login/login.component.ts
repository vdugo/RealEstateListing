import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' }; // Used for login
  newUser = { email: '', password: '' }; // Used for registration
  isLoggedIn = false; // Flag to indicate login status
  registrationMessage = ''; // Message after registration
  loginMessage = ''; // Message after login

  constructor(private realEstateService: RealEstateService, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('token');
  }
  onSubmit() {
    this.realEstateService.authenticate(this.user).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userEmail', this.user.email); // Store user email in local storage
        this.isLoggedIn = true;
        this.loginMessage = 'Login successful'; // Set login success message
        this.router.navigate(['/']); // Redirect after successful login
      },
      error => {
        console.error('Login failed', error);
        this.loginMessage = 'Login failed'; // Set login failure message
      }
    );
  }


  onRegister() {
    this.realEstateService.register(this.newUser).subscribe(
      response => {
        this.registrationMessage = 'User successfully created';
        // Reset newUser fields
        this.newUser.email = '';
        this.newUser.password = '';
      },
      error => {
        console.error('Registration failed', error);
        this.registrationMessage = '';
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirect to login page
  }
}
