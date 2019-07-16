import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../../core/services/windows.service';

// 3rd party
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public darkHeader = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.translate.get('SHARED.HEADER').subscribe((res: string) => {
      // TODO replace names if they are different
      // TODO hide mobile burger on click outside or on click of item
      // console.log(res);
    });
  }

  // @HostListener Decorator
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number >= 60) {
      this.darkHeader = true;
    } else {
      this.darkHeader = false;
    }
  }

//   goForm() {
//     window.location.href='http://www.google.com/';
// }
  goForm() : void {
    window.open("https://docs.google.com/forms/d/1SL-9au7RcQsW91n-o0l-Vz4NkRYK_N3qL9IJFpD3yfc", "_blank");
}

}
