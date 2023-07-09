import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {

    const path = `${route.routeConfig?.path}`;

    if(path === 'admin' || path === 'user'){
      
      if(!this._authService.isAuthenticated()){
          return this._router.navigate(['/login']).then(() => false);
      }

      return true;
    }else if(path === 'login'){
      if(this._authService.isAuthenticated()){
        const userRole = this._authService.getUserRole();      

        return this._router.navigate([userRole]).then(() => false);
      }
    }
    return true;
  }
}