import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nOutline } from 'src/app/shared/models/ci18n-outline';
import { Ci18nParagraph } from 'src/app/shared/models/ci18n-paragraph';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})



export class PrivacyPolicyComponent implements OnInit {

  public bError = false;

  public paragraphs: Ci18nParagraph[] = [{
    PARAGRAPH: 'Loading...',
}];

  public points: Ci18nOutline[] = [{
      MAIN_POINT: 'Loading...',
      DESCRIPTION: {
        PARAGRAPH: ''
    }
  }];
  constructor(public translate: TranslateService) { }

  ngOnInit() {

    this.translate.get('PAGES.PRIVACY-POLICY.OUTLINE.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.paragraphs = [{
          PARAGRAPH: 'Cannot get translation!'
      }];
      } else {
        this.paragraphs = res as Ci18nParagraph[];
      }
    });

    this.translate.get('PAGES.PRIVACY-POLICY.OUTLINE').subscribe((res: Ci18nOutline[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.points = [{
          MAIN_POINT: 'An error occured',
          DESCRIPTION: {
              PARAGRAPH: ''
          }
      }];
      } else {
        this.points = res as Ci18nOutline[];
      }
    });
  }
}
