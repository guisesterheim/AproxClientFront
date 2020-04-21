import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { ApplicationHttpClient } from './app.httpclient';

@Injectable()
export class AuthService {

  private auth;
  
  constructor(public router: Router, private http:ApplicationHttpClient) {
  }

  createAuthorizationHeader() {
    return new HttpHeaders({'Content-Type': 'application/json'});
  }

  authenticate(login){
    let authData = JSON.stringify(login);
    
    this.auth = this.http.Post("/server/authenticate", 
                        authData); 
    return this.auth;
  }

  public redirectToAdmin(){
    this.router.navigate(['/admin']);
  }

  public getAuthToken(){
    if(this.isAuthenticated){

    }
  }

  public setSession(authResult): void {
    // Set the time that the access token will expire at
    console.log(authResult);
    this.http.setAppToken(authResult.headers.get("authorization"));
    localStorage.setItem('access_token', authResult.headers.get("authorization"));
    localStorage.setItem('expires_at', authResult.headers.get("expires"));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
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