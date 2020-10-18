import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';



@NgModule({
  declarations: [CurrencyPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
