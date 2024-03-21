import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
//import { MiComponenteComponent } from './Components/mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    //MiComponenteComponent,
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }