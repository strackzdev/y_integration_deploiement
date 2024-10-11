import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-creation-form',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './users-creation-form.component.html',
  styleUrl: './users-creation-form.component.scss'
})
export class UsersCreationFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  userService = inject(UsersService);

  userCreationForm!: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  /**
   * Initializes the component by creating the user creation form with validation rules.
   */
  ngOnInit(): void {
    this.userCreationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required, this.ageValidator]],
      city: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]]
    });
  }

  /**
   * Validates that the user is at least 18 years old.
   * @param control - The form control to validate
   * @returns An object with the validation error if the age is less than 18, otherwise null
   */
  ageValidator(control: { value: string | number | Date; }) {
    const birthDate = new Date(control.value);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
      return { invalidDate: true };
    }

    const age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    return hasHadBirthdayThisYear && age >= 18 ? null : { underage: true };
  }

  /**
   * Handles the form submission by creating a new user and displaying success or error messages.
   */
  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (this.userCreationForm.valid) {
      this.userService.createUser(this.userCreationForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'User registered successfully!';
          this.userCreationForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration error:', error);
        },
      });
    }
  }
}
