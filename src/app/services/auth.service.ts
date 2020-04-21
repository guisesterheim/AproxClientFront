import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  private auth;

  constructor(public router: Router, private http:HttpClient) {}

  createAuthorizationHeader() {
    return new HttpHeaders({'Content-Type': 'application/json'});
  }

  authenticate(login){
    let authData = JSON.stringify(login);
    authData = JSON.parse(authData);
    let username = authData['username'];
    let password = authData['password'];

    let body = JSON.stringify(username, password);

    this.auth = this.http.post("/server/authenticate", 
                        body, { headers: this.createAuthorizationHeader(), 
                                observe: "response", 
                                responseType: "json"}); 
    return this.auth;
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}