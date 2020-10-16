import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroContainerComponent } from './hero-container/hero-container.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { Hero2Component } from './hero2/hero2.component';

const routes: Routes = [
  {
    path: '',
    component: HeroContainerComponent,
    children: [
      {
        path: 'hero-list',
        component: HeroListComponent
      },
      {
        path: 'hero2',
        component: Hero2Component
      },
      {
        path: '**',
        redirectTo: 'hero-list'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
