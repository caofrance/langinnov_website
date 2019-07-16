import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { ResearchComponent } from './research/research.component';
import { FeatureComponent } from './feature/feature.component';
import { ScreenshotComponent } from './screenshot/screenshot.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { PriceComponent } from './price/price.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AboutReverseComponent } from './about-reverse/about-reverse.component';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { PartnersComponent } from './partners/partners.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NewsComponent } from './news/news.component';
import { JobsComponent } from '../pages/jobs/jobs.component';

// 3rd party
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { VideoComponent } from './privacy/video/video.component';
import { IntroVideoComponent } from './intro/intro-video/intro-video.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { IntroAboutComponent } from './intro-about/intro-about.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    // 3rd party
    OwlModule,
    NgxPageScrollModule,
    FontAwesomeModule
  ],
  declarations: [
    PartnersComponent,
    HomeComponent,
    IntroComponent,
    ResearchComponent,
    FeatureComponent,
    ScreenshotComponent,
    TeamComponent,
    BlogComponent,
    PriceComponent,
    BenefitsComponent,
    TestimonialComponent,
    ContactUsComponent,
    NewsletterComponent,
    AboutReverseComponent,
    AboutIntroComponent,
    PartnersComponent,
    PrivacyComponent,
    NewsComponent,
    VideoComponent,
    IntroVideoComponent,
    ServicesComponent,
    AboutComponent,
    CareersComponent,
    ContactComponent,
    IntroAboutComponent,
    JobsComponent
  ],
  providers: [],
  entryComponents: [VideoComponent, IntroVideoComponent, JobsComponent]
})
export class HomeModule { }
