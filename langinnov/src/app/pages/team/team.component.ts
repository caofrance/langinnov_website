import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { Ci18nMember } from 'src/app/shared/models/ci18n-member';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public bError = false;

    // Team Carousel
    public members: Ci18nMember[] = [{
        NAME: 'Loading',
        DESCRIPTION: 'Loading...',
        IMG: {
            ALT: '',
            SRC: ''
        }
    }];

    constructor(public translate: TranslateService, public dialog: MatCardModule) { }

    ngOnInit() {
        this.translate.get('PAGES.TEAM.MEMBERS').subscribe((res: Ci18nMember[] | string) => {
            if (typeof(res) === 'string') {
                this.bError = true;
                this.members = [{
                    NAME: 'An error occured',
                    DESCRIPTION: 'Cannot get translation',
                    IMG: {
                        ALT: '',
                        SRC: ''
                    }
                }];
            } else {
                this.members = res as Ci18nMember[];
            }
        });
    }
}
