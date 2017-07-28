import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardMenuComponent } from './components/menu/menu.component';
import { DashboardHomeComponent } from './components/home/home.component';
import { DashboardProfileSearch } from './components/profileSearch/profileSearch.component';

import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardMenuComponent,
    DashboardHomeComponent,
    DashboardProfileSearch,
  ],
  imports: [
    BrowserModule,
    DashboardRoutes,
    BrowserAnimationsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [

  ],
})
export class DashboardModule { }
