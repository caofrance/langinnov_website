/**
 * @file Manages singleton services and component.
 * @description For more details, check https://angular.io/guide/styleguide#core-feature-module
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { I18nMissingTranslationHandler } from './handlers/I18n-missing-translation.handler';

// Services
import { WINDOW_PROVIDERS } from './services/windows.service';
import { LandingFixService } from './services/landing-fix.service';

// 3rd party
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

// TODO Add Angular universal for server-side rendering (SEO)

@NgModule({
  exports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    // 3rd party
    TranslateModule,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    // 3rd party
    TranslateModule.forRoot({
      loader: { // TODO en prod utiliser un autre loader pour compiler et ne pas avoir à faire de requette pour le langage par defaut
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler : {
        provide: MissingTranslationHandler,
        useClass: I18nMissingTranslationHandler
      }
    })
  ],
  providers: [
    WINDOW_PROVIDERS,
    LandingFixService
  ]
})
export class CoreModule {
  // make sure CoreModule is imported only by one NgModule the AppModule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
