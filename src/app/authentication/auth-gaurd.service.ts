import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGaurdService implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const path = state.url.split('/');
        if (path[1] === 'dashboard') {
            return this.authenticationService.isUserLoggedIn(path[1]);
            return true;
        } else {
            return this.authenticationService.isUserLoggedIn(path[1]);
            return true;
        }


        localStorage.clear();
        this.router.navigate(['login']);
        return false;

    }

}

