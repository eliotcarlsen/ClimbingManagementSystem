import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SuiModule } from 'ng2-semantic-ui';

import { LayoutModule } from '../modules/layout/layout.module';
import { SystemModule } from '../modules/system/system.module';
import { LoginModule } from '../modules/login/login.module';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { LegalModule } from '../modules/legal/legal.module';

import { HttpService } from '../providers/http.service';
import { AuthenticateService } from '../providers/auth/authenticate.service';
import { AuthGuardService } from '../providers/auth/guard.service';

import { CmsComponent } from './cms.component';

@NgModule({
  providers: [
    AuthenticateService,
    AuthGuardService,
    HttpService,
  ],
  declarations: [
    CmsComponent,
  ],
  imports: [
    SuiModule,
    BrowserModule,
    HttpModule,
    OAuthModule.forRoot(),
    LayoutModule,
    DashboardModule,
    LoginModule,
    SystemModule,
  ],
  bootstrap: [
    CmsComponent,
  ],
})
export class CmsModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2))
  }
}
