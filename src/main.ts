import { AppComponent } from './app/app.component'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import './polyfills'

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,

    ReactiveFormsModule,
  ],
  entryComponents: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [  
    AppComponent
  ],
  providers: [

  ]
})
export class DemoMaterialModule {}
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
}).catch(err => console.error(err));