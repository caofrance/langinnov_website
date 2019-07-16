import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nTestimony } from 'src/app/shared/models/ci18n-testimony';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
    public bError = false;
    public testimonials: Ci18nTestimony[] = [{
        IMG: {
            ALT: '',
            SRC: ''
        },
        CITATION: 'Loading...',
        LOCATION: '',
        NAME: 'Loading...'
    }];

    // Testimonial Carousel Options
    public testimonialCarousel: any = {
        loop: true,
        // autoplay:true,
        // autoplayTimeout:5000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        nav: false,
        // navClass: ['owl-prev', 'owl-next'],
        // navText: ['<img src="assets/images/back.png">', '<img src="assets/images/next.png">'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
                margin: 150,
            },
            991: {
                items: 1,
                margin: 150,
            },
            1000: {
                items: 1,
                margin: 150,
            },
            1600: {
              items: 1,
              margin: 450,
          }
        }
    };

    constructor(public translate: TranslateService) { }

    ngOnInit() {
        this.translate.get('HOME.TESTIMONIAL.TESTIMONIES').subscribe((res: Ci18nTestimony[] | string) => {
            if (typeof(res) === 'string') {
                this.bError = true;
                this.testimonials = [{
                    IMG: {
                        ALT: '',
                        SRC: ''
                    },
                    CITATION: 'Cannot get translation',
                    LOCATION: '',
                    NAME: 'An error occured'
                }];
            } else {
                this.testimonials = res as Ci18nTestimony[];
            }
        });
    }
}
