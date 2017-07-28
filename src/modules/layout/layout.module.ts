import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashboardModule } from '../dashboard/dashboard.module';
import { LoginModule } from '../login/login.module'

import { LayoutBaseComponent } from './components/base/base.component';
import { LayoutMenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    DashboardModule,
    LoginModule,
  ],
  exports: [
    LayoutBaseComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    LayoutBaseComponent,
    LayoutMenuComponent,
  ],
})
export class LayoutModule { }
