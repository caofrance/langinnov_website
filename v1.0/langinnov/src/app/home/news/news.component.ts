import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { Ci18nArticle } from 'src/app/shared/models/ci18n-article';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public bError = false;
  public bMobile = false;
  public bMedium = false;

  public articles: Ci18nArticle[] = [{
    IMG: {
        ALT: '',
        SRC: ''
    },
    HEADLINE: 'Loading',
    PUBLISHER: 'Loading...',
    HREF: 'Loading...',
    FILTER: 'Loading...',
    LANGUAGE: 'Loading...'
  }];

  constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService, public dialog: MatCardModule) {
    breakpointObserver.observe('(max-width: 767px)').subscribe(result => {
      this.bMobile = result.matches;
    });
    breakpointObserver.observe('(max-width: 991px)').subscribe(result => {
      this.bMedium = result.matches;
    });
   }

  ngOnInit() {
    this.translate.get('PAGES.NEWS.ARTICLES').subscribe((res: Ci18nArticle[] | string) => {
      if (typeof(res) === 'string') {
          this.bError = true;
          this.articles = [{
              HEADLINE: 'An error occured',
              PUBLISHER: 'Cannot get translation',
              HREF: 'Cannot get translation',
              FILTER: 'Cannot get translation',
              LANGUAGE: 'Cannot get translation',
              IMG: {
                  ALT: '',
                  SRC: ''
              }
          }];
      } else {
          this.articles = res as Ci18nArticle[];
      }
   });
  }

}
