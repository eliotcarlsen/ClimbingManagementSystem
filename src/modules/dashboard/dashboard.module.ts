import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardMenuComponent } from './components/menu/menu.component';
import { DashboardHomeComponent } from './components/home/home.component';
import { DashboardProfileSearchComponent } from './components/profileSearch/profileSearch.component';

import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardMenuComponent,
    DashboardHomeComponent,
    DashboardProfileSearchComponent,
  ],
  imports: [
    BrowserModule,
    DashboardRoutes,
    BrowserAnimationsModule,
  ],
  schemas: [
    
  ],
  exports: [

  ],
})
export class DashboardModule { }
