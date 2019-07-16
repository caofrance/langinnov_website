import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nParagraph } from 'src/app/shared/models/ci18n-paragraph';
import { Ci18nPosition } from 'src/app/shared/models/ci18n-position';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.scss']
})
export class AttributionComponent implements OnInit {

  public bError = false;

    public paragraphs: Ci18nParagraph[] = [{
      PARAGRAPH: 'Loading...',
  }];

  public positions: Ci18nPosition[] = [{
    POSITION: 'Loading...',
    LOCATION: 'Loading...'
  }];

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('PAGES.CAREERS.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.paragraphs = [{
          PARAGRAPH: 'Cannot get translation!'
      }];
      } else {
        this.paragraphs = res as Ci18nParagraph[];
      }
    });
    this.translate.get('PAGES.CAREERS.POSITIONS').subscribe((res: Ci18nPosition[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.positions = [{
          POSITION: 'Cannot get translation!',
          LOCATION: 'Cannot get translation!'
      }];
      } else {
        this.positions = res as Ci18nPosition[];
      }
    });
  }

}
