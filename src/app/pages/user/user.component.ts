import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private readonly _authService: AuthService) { }

  ngOnInit(): void {

  }

  public onLogout(): void {
    this._authService.logout();
  }
}
