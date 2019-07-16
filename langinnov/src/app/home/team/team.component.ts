import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
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

    // Team Carousel Options
    public teamCarousel: any = {
        loop: false,
        margin: 30,
        nav: false,
        dots: true,
        autoWidth:false,
        responsive: {
            0: {
                items: 1,
                margin: 50,
            },
            576: {
                items: 1,
                margin: 50,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    };

    constructor(public translate: TranslateService) { }

    ngOnInit() {
        this.translate.get('HOME.TEAM.MEMBERS').subscribe((res: Ci18nMember[] | string) => {
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
