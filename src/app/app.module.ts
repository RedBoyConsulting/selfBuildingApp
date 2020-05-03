import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { 
          ReactiveFormsModule, 
          FormsModule 
} from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { SelfbuildingMenuComponent } from './selfbuilding-menu/selfbuilding-menu.component'
import { SelfbuildingArComponent } from './selfbuilding-ar/selfbuilding-ar.component'
import { SelfbuildingVrComponent } from './selfbuilding-vr/selfbuilding-vr.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { UserValidationService } from './user-validation.service'
import { NavigationBackwardService } from './navigation-backward.service'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ForgottenComponent } from './forgotten/forgotten.component'

@NgModule({

imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  BrowserModule, FormsModule,
  RouterModule.forRoot([
  { path: '', component: LoginComponent },
      { 
        path: 'signup', component: SignupComponent 
      },
      { 
        path: 'forgotten', component: ForgottenComponent
      },
      { 
        path: 'selfbuilding-menu', component: SelfbuildingMenuComponent
      },
      { 
        path: 'selfbuilding-ar', component: SelfbuildingArComponent
      },
      { 
        path: 'selfbuilding-vr', component: SelfbuildingVrComponent
      },
    ])
  ],
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    SignupComponent, 
    SelfbuildingMenuComponent, 
    SelfbuildingArComponent, 
    SelfbuildingVrComponent, 
    TopBarComponent, 
    ForgottenComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [
    UserValidationService, 
    NavigationBackwardService
  ],
  exports: [

  ]
})
export class AppModule { }
