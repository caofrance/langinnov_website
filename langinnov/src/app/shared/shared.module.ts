/**
 * @file Manages simple components re-used across the app without being singletons.
 * @description For more details, check https://angular.io/guide/styleguide#shared-feature-module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Angular material
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatExpansionModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';

// 3rd party
import { TranslateModule } from '@ngx-translate/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    // 3rd party
    TranslateModule,
    // Angular material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    // 3rd party
    NgxPageScrollModule,
    TranslateModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
