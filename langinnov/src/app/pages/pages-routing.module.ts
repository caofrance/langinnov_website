import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ReviewComponent } from './review/review.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { DownloadComponent } from './download/download.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { CareersComponent } from './careers/careers.component';
import { AttributionComponent } from './attribution/attribution.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'thank-you',
        component: ThankYouComponent,
      },
      {
        path: 'review',
        component: ReviewComponent,
      },
      {
        path: '404',
        component: ErrorPageComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'download',
        component: DownloadComponent,
      },
      {
        path: 'coming-soon',
        component: ComingsoonComponent,
      },
      {
        path: 'email-template',
        component: EmailTemplateComponent,
      },
      {
        path: 'careers',
        component: CareersComponent,
      },
      {
        path: 'attribution',
        component: AttributionComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: 'terms-of-use',
        component: TermsOfUseComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
