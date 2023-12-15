import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'; // Make sure this import is correct

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Include AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
