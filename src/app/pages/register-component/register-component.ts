import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.css'],
})
export class RegisterComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  registerForm: any;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
      confirmPassword: ['', Validators.required],
      checkPassword: ['', Validators.required],
      agree: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, Validators.required],
    });
  }
  updateConfirmValidator(): void {
    const password = this.registerForm.get('password');
    const confirmPassword = this.registerForm.get('confirmPassword');
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ matchPassword: true });
    } else {
      confirmPassword.setErrors(null);
    }
  }
}
