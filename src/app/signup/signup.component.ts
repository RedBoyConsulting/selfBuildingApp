import { Component, OnInit } from '@angular/core'
import { 
  FormGroup,
  Validators, 
  FormBuilder 
} from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm: FormGroup
  submitted = false
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  )
  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      account: ''}, {
        validator: MustMatch(
          'password', 
          'confirmPassword'
        )
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls }
  onSubmit(customerData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //alert('Acceso Correcto' + JSON.stringify(this.registerForm.value))
    this.router.navigate(['/index'])
  }
}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}