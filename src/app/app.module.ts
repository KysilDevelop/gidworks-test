import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRootComponent } from './app-root/app-root.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { AppContractListComponent } from './app-contract-list/app-contract-list.component';


import "@fontsource/inter";
import '@pixelpay/fonts/dist/gilroy.css';
@NgModule({
  declarations: [
    AppComponent,
    AppRootComponent,
    AppTopBarComponent,
    AppContractListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
