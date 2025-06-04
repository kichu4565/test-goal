import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.forgotForm.invalid) {
      this.errorMessage = 'Please enter a valid email address';
      return;
    }
    const email = this.forgotForm.value.email;
    this.authService.checkEmailRegistered(email).subscribe({
      next: () => {
        // Proceed to next step (e.g., show OTP/token input)
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Email is not registered';
      }
    });
  }
}
