import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

  constructor() { }

  // En este caso, Can Match y Activate, usa como dato GuardResult que incluye tanto boolean, observable de boolean y UrlTree,
  // cosa que este ultimo no voy a utilizar por lo que lo voy a cambiar
  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    console.log('Can Match')
    console.log({route, segments})

    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    console.log('Can Activate')
    console.log({route, state})

    return true;
  }

}
