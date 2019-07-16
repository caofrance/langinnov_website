import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nParagraph } from 'src/app/shared/models/ci18n-paragraph';
import {MatDialog} from '@angular/material';
import { VideoComponent } from 'src/app/home/privacy/video/video.component';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  public bError = false;
  public bMobile: boolean = false;

    public paragraphs: Ci18nParagraph[] = [{
      PARAGRAPH: 'Loading...',
  }];


  constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService, public dialog: MatDialog) {
    breakpointObserver.observe('(max-width: 720px)').subscribe(result => {
      this.bMobile = result.matches;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(VideoComponent, {
      position: {top: '15vh'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.translate.get('HOME.PRIVACY.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
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

