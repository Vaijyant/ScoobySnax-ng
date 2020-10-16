import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroContainerComponent } from './hero-container/hero-container.component';
import { HeroRoutingModule } from './hero-routing.module';
import { Hero2Component } from './hero2/hero2.component';

@NgModule({
  declarations: [HeroContainerComponent, HeroListComponent, Hero2Component],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
