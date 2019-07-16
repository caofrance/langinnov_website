import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Ci18nProfile } from 'src/app/shared/models/ci18n-profile';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import {SubscribeService} from '../../core/services/subscribe.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  public contactForm: FormGroup;
  public bError = false;
  public profileTypes: Ci18nProfile[] = [];
  userSubscribed = false;
  errorWhileSubbing = false;


  constructor(
    private _fb: FormBuilder,
    public translate: TranslateService,
    private subService: SubscribeService,

  ) {
    this.contactForm = this._fb.group({
      profile: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit() {
    this.translate.get('HOME.NEWSLETTER.PROFILES').subscribe((res: Ci18nProfile[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
      } else {
        this.profileTypes = res as Ci18nProfile[];
      }
    });
  }

  public sendForm() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      const subForm = this.contactForm.value;
      this.subService.subscribe(subForm['email'], subForm['profile']).subscribe(
        (data) => {
          console.info('Successfully subscribed');
          this.userSubscribed = true;
        },
        (error) => {
          console.info('Error While Subbing');
          this.errorWhileSubbing = true;
        }
      );
    }
  }
}
