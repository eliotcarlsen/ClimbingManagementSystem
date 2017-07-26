import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { OAuthModule } from 'angular-oauth2-oidc';
// import { SuiModule } from 'ng2-semantic-ui';

import { LayoutModule } from '../modules/layout/layout.module';

import { CmsComponent } from './cms.component';

@NgModule({
  providers: [

  ],
  declarations: [
    CmsComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    LayoutModule,
    OAuthModule.forRoot(),
  ],
  bootstrap: [
    CmsComponent,
  ],
})
export class CmsModule {
  constructor(router: Router) {

  }
}
