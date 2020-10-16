import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HeroRoutingModule } from './hero-routing.module';

import { HeroContainerComponent } from './hero-container/hero-container.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { Hero2Component } from './hero2/hero2.component';


@NgModule({
  declarations: [HeroContainerComponent, HeroListComponent, Hero2Component],
  imports: [
    CommonModule,
    MaterialModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
