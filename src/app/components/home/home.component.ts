import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientForm: FormGroup;
  validMessage: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      representativeFirstName: new FormControl('', Validators.required),
      representativeLastName: new FormControl('', Validators.required),
      phone1: new FormControl('', Validators.required),
      phone2: new FormControl()
    })
  }

  submitRegistration(){
    if(this.clientForm.valid){
      this.validMessage = "Your client registration has been submitted. Thank you!";
      this.clientService.createClient(this.clientForm.value).subscribe(
        data => {
          this.clientForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
