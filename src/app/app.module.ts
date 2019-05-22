import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {baseReducer} from "./store/base.reducer";
import { Test2Component } from './test2/test2.component';
import {HttpClientModule} from "@angular/common/http";
import {GithubreposService} from "./githubrepos.service";


@NgModule({
  declarations: [
    AppComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({base: baseReducer})
  ],
  providers: [GithubreposService],
  bootstrap: [AppComponent]
})

export class AppModule { }
