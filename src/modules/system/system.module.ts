import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SystemRoutes } from './system.routes';

import { NotFoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    SystemRoutes,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SystemModule { }
