import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private readonly _authService: AuthService) { }

  ngOnInit(): void {
  
  }

  public onLogout(): void {
    this._authService.logout();
  }
}
