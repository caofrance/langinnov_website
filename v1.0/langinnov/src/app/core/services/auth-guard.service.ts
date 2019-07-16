import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('IN canActivate : ' + state.url);
    if (environment.under_construction) {
      if (state.url === '/construction') {
        return true;
      } else if (window.sessionStorage.getItem('allowed') === environment.key) {
        return true;
      } else {
        this.router.navigate(['/construction']).catch((_) => {
          console.error('Failed to navigate to route!!!');
        });
      }
    } else {
      if (state.url === '/construction') {
        this.router.navigate(['/home']).catch((_) => {
          console.error('Failed to navigate to route!!!');
        });
      } else {
        return true;
      }
    }
  }
}
