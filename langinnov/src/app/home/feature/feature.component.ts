import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Ci18nStep } from 'src/app/shared/models/ci18n-step';


// 3rd party
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit { // TODO load corresponding image on click +  Handle responsive
  public steps: Ci18nStep[] = [];
  public bError = false;
  public bMobile = false;
  public bMedium = false;
  public activeDesktopImgIndex = 0;

  constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    breakpointObserver.observe('(max-width: 767px)').subscribe(result => {
      this.bMobile = result.matches;
    });
    breakpointObserver.observe('(min-width: 768px) and (max-width: 991px)').subscribe(result => {
      this.bMedium = result.matches;
    });
   }

  ngOnInit() {
    this.translate.get('HOME.FEATURE.STEPS').subscribe((res: Ci18nStep[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
      } else {
        this.steps = res as Ci18nStep[];
      }
    });
  }
}
