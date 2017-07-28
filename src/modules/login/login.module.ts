import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { SuiMessageModule } from 'ng2-semantic-ui';

import { LoginMenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

import { LoginRoutes } from './login.routes';

@NgModule({
  declarations: [
    LoginMenuComponent,
    LoginComponent,
  ],
  imports: [
    SuiMessageModule,
    BrowserModule,
    LoginRoutes,
    FormsModule,
  ],
  schemas: [
    
  ],
  exports: [
    LoginMenuComponent,
  ],
})
export class LoginModule { }
