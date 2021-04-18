import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//http
import {HttpClientModule} from "@angular/common/http";

//toast
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

//fontawesome
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
