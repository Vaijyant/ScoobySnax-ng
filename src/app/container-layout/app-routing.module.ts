import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('../modules/hero/hero.module').then(m => m.HeroModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../modules/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
