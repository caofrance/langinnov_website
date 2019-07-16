import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nBenefit } from 'src/app/shared/models/ci18n-benefit';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  public bError = false;

  // Benefits Carousel
  public benefits: Ci18nBenefit[] = [{
      DESCRIPTION: 'Loading...',
      IMG: {
          ALT: '',
          SRC: ''
      }
  }];



constructor(public translate: TranslateService) { }

ngOnInit() {
  this.translate.get('HOME.BENEFITS.BENEFIT').subscribe((res: Ci18nBenefit[] | string) => {
      if (typeof(res) === 'string') {
          this.bError = true;
          this.benefits = [{
              DESCRIPTION: 'Cannot get translation',
              IMG: {
                  ALT: '',
                  SRC: ''
              }
          }];
      } else {
          this.benefits = res as Ci18nBenefit[];
      }
  });
}
}
