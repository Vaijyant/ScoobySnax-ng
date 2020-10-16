import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerLayoutModule } from './container-layout/container-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContainerLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
