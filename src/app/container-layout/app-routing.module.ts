import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('../modules/person/person.module').then(m => m.PersonModule),
    data: {type: 'hero'}
  },
  {
    path: 'ghost',
    loadChildren: () => import('../modules/person/person.module').then(m => m.PersonModule),
    data: {type: 'ghost'}
  },
  {
    path: '**',
    redirectTo: 'hero'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
