import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validMessage: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submitLogin(){
    if(this.loginForm.valid){
      this.validMessage = "Login Successful!";
      this.authService.authenticate(this.loginForm.value).subscribe(
        data => {
          this.loginForm.reset();
          this.authService.setSession(data);
          this.authService.redirectToAdmin();

          return true;
        },
        error => {
          console.log(error);
          return Observable.throw(error);
        }
      )
    }else{
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
}
