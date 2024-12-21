import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // Import necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the login form with validation rules
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Simulated credential check (replace with real backend authentication)
      if (email === 'admin@example.com' && password === 'admin123') {
        console.log('Admin Login Successful');
        this.router.navigate(['/admin-dashboard']); // Redirect to Admin Dashboard
      } else if (email === 'user@example.com' && password === 'user123') {
        console.log('User Login Successful');
        this.router.navigate(['/user-dashboard']); // Redirect to User Dashboard
      } else {
        console.log('Invalid credentials');
        alert('Invalid credentials! Please try again.');
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
