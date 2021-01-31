import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './view/index/index.component'
import { ChooseComponent } from './view/choose/choose.component'
import { NewstockComponent } from './view/newstock/newstock.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'choose',
    component: ChooseComponent,
    pathMatch: 'full'
  },
  {
    path: 'newstock',
    component: NewstockComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
