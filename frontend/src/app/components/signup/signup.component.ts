import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
      standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onCreate();
  }

  onCreate(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get name() { return this.signupForm.get('name'); }
  get dob() { return this.signupForm.get('dob'); }
  get email() { return this.signupForm.get('email'); }
  get mobile() { return this.signupForm.get('mobile'); }
  get address() { return this.signupForm.get('address'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  //  Submit the form
  signup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const formData = this.signupForm.value;
    const payload: any = {
      ...formData,
      dateOfBirth: this.formatDate(formData.dob)
    };
    delete payload.dob;
    delete payload.confirmPassword;

    this.authService.signup(payload).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Signup failed: ' + (err.error?.message || err.error || 'Unknown error'));
      }
    });
  }

  formatDate(date: string): string {
    // If date is already in YYYY-MM-DD, return as is
    if (/\d{4}-\d{2}-\d{2}/.test(date)) return date;
    // If date is in DD-MM-YYYY, convert it
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }
}
