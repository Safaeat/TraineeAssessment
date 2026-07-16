import { Routes } from '@angular/router';

import { Public } from './components/public/public';
import { Login } from './components/login/login';
import { Secure } from './components/secure/secure';
import { Currency } from './components/currency/currency';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: Public
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'secure',
    component: Secure,
    canActivate: [authGuard]
  },

  {
    path: 'currency',
    component: Currency,
    canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: ''
  }

];
