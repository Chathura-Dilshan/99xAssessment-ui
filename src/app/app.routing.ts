import {NgModule} from '@angular/core';
import {CommonModule, } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './session/login/login.component';
import {AuthGaurdService} from './authentication/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGaurdService],
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

// {
//   path: '',
//   redirectTo: 'dashboard',
//   pathMatch: 'full',
// }
