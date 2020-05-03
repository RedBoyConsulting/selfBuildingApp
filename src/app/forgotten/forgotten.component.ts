import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { UserValidationService } from '../user-validation.service'

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.css']
})

export class ForgottenComponent {
  items
  checkoutForm

  constructor(
    private formBuilder: FormBuilder,
    private loginService: UserValidationService,
   ) {
    this.items = this.loginService.getItems()
    this.checkoutForm = this.formBuilder.group({
      email: ''
    })
  }
}
