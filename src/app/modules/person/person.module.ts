import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonContainerComponent } from './person-container/person-container.component';
import { PersonListComponent } from './person-list/person-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [PersonContainerComponent, PersonListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
