import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('../modules/hero/hero.module').then(m => m.HeroModule)
  },
  {
    path: 'ghost',
    loadChildren: () => import('../modules/ghost/ghost.module').then(m => m.GhostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
