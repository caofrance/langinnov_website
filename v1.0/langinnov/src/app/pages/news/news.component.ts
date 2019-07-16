import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { Ci18nArticle } from 'src/app/shared/models/ci18n-article';
import { Ci18nFilter } from 'src/app/shared/models/ci18n-filter';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public bError = false;

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
    public filters: Ci18nFilter[] = [{
      FILTER: 'Loading...'
    }];

  constructor(public translate: TranslateService, public dialog: MatCardModule) { }

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

    this.translate.get('PAGES.NEWS.FILTERS').subscribe((res: Ci18nArticle[] | string) => {
      if (typeof(res) === 'string') {
          this.bError = true;
          this.filters = [{
              FILTER: 'An error occured'
          }];
      } else {
          this.filters = res as Ci18nArticle[];
      }
    });
  }

}
