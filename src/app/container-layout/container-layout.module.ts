import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLayoutComponent } from './container-layout/container-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ContainerLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule    
  ],
  exports: [ContainerLayoutComponent]
})
export class ContainerLayoutModule { }
