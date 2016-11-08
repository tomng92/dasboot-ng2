import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeModule} from "./home/home.module";
import {NavbarModule} from "./navbar/navbar.module";
import {HeroModule} from "./hero/hero.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  // imports: [
  //   BrowserModule,
  //   FormsModule,
  //   HttpModule
  // ],

  imports:[ BrowserModule, HomeModule, HeroModule, NavbarModule, RouterModule.forRoot([]) ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
