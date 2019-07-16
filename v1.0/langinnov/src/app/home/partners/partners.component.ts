import { Component, OnInit } from '@angular/core';
import { Ci18nSupport } from 'src/app/shared/models/ci18n-support';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  public supports$: Observable<Ci18nSupport[]> = this.translate.get('HOME.PARTNERS.SUPPORTS');

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }
}
