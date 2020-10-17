import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonContainerComponent } from './person-container/person-container.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonContainerComponent,
    children: [
      {
        path: 'person-list',
        component: PersonListComponent
      },
      {
        path: '**',
        redirectTo: 'person-list'
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
export class PersonRoutingModule { }
