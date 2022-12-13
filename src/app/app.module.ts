import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'

import { AppendPipe } from './custom.pipe';
import { FormComponent } from './form/form.component';
import { HookComponent } from './hook/hook.component';


@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    FormComponent,
    HookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
