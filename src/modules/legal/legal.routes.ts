import { RouterModule } from '@angular/router';

import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

export const LegalRoutes = RouterModule.forRoot([
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'copyright',
    component: CopyrightComponent,
  },
])
