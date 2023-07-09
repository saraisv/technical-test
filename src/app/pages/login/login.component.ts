import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ICredentials } from 'src/app/shared/interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  public loginForm: FormGroup;

  public hasInvalidCredentials: boolean = false;

  private _subscriptions = new Subscription;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _authService: AuthService) { 
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/)]]
    });
  }

  ngOnInit(): void {
    this._subscriptions.add(this.loginForm.valueChanges.subscribe(value => this.hasInvalidCredentials=false))
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log("login: ", this.loginForm.value);
      this._authService.login(this.loginForm.value as ICredentials)
        .subscribe({
          error: (error) => {
            this.hasInvalidCredentials = true;
          }
        });
      // console.log('Inicio de sesión exitoso');
    }
  }

}
