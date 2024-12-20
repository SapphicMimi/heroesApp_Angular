import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean>  {
    return this.authService.checkAuthentication()
      .pipe(
        tap(isAuthenticated => {
          if(!isAuthenticated) {
            this.router.navigate(['./auth/login'])
          }
        })
      )
  }

  // En este caso, Can Match y Activate, usa como dato GuardResult que incluye tanto boolean, observable de boolean y UrlTree,
  // cosa que este ultimo no voy a utilizar por lo que lo voy a cambiar
  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    // console.log('Can Match')
    // console.log({route, segments})

    return this.checkAuthStatus();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // console.log('Can Activate')
    // console.log({route, state})

    return this.checkAuthStatus();
  }

}
