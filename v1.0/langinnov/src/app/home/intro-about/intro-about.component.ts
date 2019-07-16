import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nParagraph } from 'src/app/shared/models/ci18n-paragraph';

@Component({
  selector: 'app-intro-about',
  templateUrl: './intro-about.component.html',
  styleUrls: ['./intro-about.component.scss']
})
export class IntroAboutComponent implements OnInit {
  public bError = false;
  public bMedium = false;

    public paragraphs: Ci18nParagraph[] = [{
      PARAGRAPH: 'Loading...',
  }];


  constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
      this.bMedium = result.matches;
    });
  }

  ngOnInit() {
    this.translate.get('HOME.INTRO-ABOUT.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.paragraphs = [{
          PARAGRAPH: 'Cannot get translation!'
      }];
      } else {
        this.paragraphs = res as Ci18nParagraph[];
      }
    });
  }

}
