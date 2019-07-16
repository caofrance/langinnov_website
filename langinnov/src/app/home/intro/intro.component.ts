import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nParagraph } from 'src/app/shared/models/ci18n-paragraph';
import {MatDialog} from '@angular/material';
import { IntroVideoComponent } from 'src/app/home/intro/intro-video/intro-video.component';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public bError = false;
  public bMobile = false;

  public paragraphs: Ci18nParagraph[] = [{
        PARAGRAPH: 'Loading...',
    }];

    constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService, public dialog: MatDialog) {
      breakpointObserver.observe('(max-width: 767px)').subscribe(result => {
        this.bMobile = result.matches;
      });
     }

    openDialog(): void {
      const dialogRef = this.dialog.open(IntroVideoComponent, {
        position: {top: '15vh'}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    ngOnInit() {
    }

}
