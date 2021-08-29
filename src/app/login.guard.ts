import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor( private router: Router) { }
  canActivate(): boolean {
    const isLoggeIn = localStorage.getItem('isLoggedIn');
    if (isLoggeIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
