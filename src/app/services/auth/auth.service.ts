import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { USER } from 'src/app/shared/constants';
import { ICredentials, IUser } from 'src/app/shared/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: IUser[] = [
    { id: 'userA1', name: 'Admin', lastname: '', username: 'admin', email: 'admin@innova.com', password: 'Admin.123', role: 'admin' },
    { id: 'userA2', name: 'User A', lastname: '', username: 'user', email: 'user@innova.com', password: 'User.123', role: 'user' }
  ];

  constructor(private readonly _router: Router) { }

  public login(credentials: ICredentials): Observable<void | Error>{
    
    const user = this.users.find((user: IUser) => user.email === credentials.email && user.password === credentials.password)

    console.log("user: ", user);

    if(!!user){
      localStorage.setItem(USER, JSON.stringify(user));
      this.redirectTo(user.role);
      return of();
    }

    return throwError(new Error('Incorrect User'));
  }

  public logout(): void {
    localStorage.clear();
    this._router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  public getCurrentUser(): IUser | null {
    const user: IUser = JSON.parse(localStorage.getItem(USER) as string) as IUser;
    return !!user ? user : null;
  }

  public getUserRole(): string {
    const user = this.getCurrentUser();
    return user ? user.role : '';
  }

  private redirectTo(role: string): void {
    console.log("role: ", role);
    switch (role) {
      case 'admin':
        this._router.navigate(['admin']);
        break;
      case 'user':
        this._router.navigate(['user']);
        break;
      default:
        this._router.navigate(['login']);
        break;
    }
  }
}
