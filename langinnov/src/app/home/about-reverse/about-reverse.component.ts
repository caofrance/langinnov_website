import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nParagraph } from 'src/app/shared/models/ci18n-paragraph';

@Component({
  selector: 'app-about-reverse',
  templateUrl: './about-reverse.component.html',
  styleUrls: ['./about-reverse.component.scss']
})
export class AboutReverseComponent implements OnInit {
  public bError = false;

    public paragraphs: Ci18nParagraph[] = [{
      PARAGRAPH: 'Loading...',
  }];


  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('HOME.ABOUT-REVERSE.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
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
