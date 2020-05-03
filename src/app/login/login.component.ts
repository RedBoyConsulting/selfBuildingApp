import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms'
import { UserValidationService } from '../user-validation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false
  loginForm: FormGroup
  //imageUrl_2='https://user-images.githubusercontent.com/1688498/73691357-ceb20280-4697-11ea-8fc3-9e0057b3d8d0.png'
  constructor(
    private router: Router,
    private loginService: UserValidationService,
    private formBuilder: FormBuilder,
    fb: FormBuilder,
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
   }
  get f() { return this.loginForm.controls }
  onSubmit(customerData) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return 
      alert('Usuario Almacenado' + JSON.stringify(this.loginForm.value))
    }
    this.router.navigate(['/index'])
  }
  ngOnInit() {
  }
}