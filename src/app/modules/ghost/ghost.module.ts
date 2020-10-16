import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostListComponent } from './ghost-list/ghost-list.component';
import { GhostRoutingModule } from './ghost-routing.module';



@NgModule({
  declarations: [GhostListComponent],
  imports: [
    CommonModule,
    GhostRoutingModule
  ]
})
export class GhostModule { }
