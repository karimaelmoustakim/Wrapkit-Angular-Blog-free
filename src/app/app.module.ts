import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCongeComponent } from './apps/form-conge/form-conge.component';
import { FormsComponent } from './apps/forms/forms.component';
import { FormAbscenceComponent } from './apps/form-abscence/form-abscence.component';






@NgModule({
  declarations: [
    AppComponent,
    FormCongeComponent,
    FormsComponent,
    FormAbscenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
