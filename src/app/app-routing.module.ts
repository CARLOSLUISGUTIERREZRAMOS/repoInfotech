import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistroComponent } from './components/user-registro/user-registro.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'user', pathMatch: 'full'
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'registro', component: UserRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
