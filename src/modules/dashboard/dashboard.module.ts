import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardMenuComponent } from './components/menu/menu.component';
import { DashboardHomeComponent } from './components/home/home.component';

import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardMenuComponent,
    DashboardHomeComponent,
  ],
  imports: [
    BrowserModule,
    DashboardRoutes,
    BrowserAnimationsModule,
  ],
  exports: [

  ],
})
export class DashboardModule { }
