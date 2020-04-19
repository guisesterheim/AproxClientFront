import { Component, OnInit } from '@angular/core';
import { AproxClientService } from '../../services/aprox.client.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public clients;

  constructor(private aproxClientService: AproxClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.aproxClientService.getClients().subscribe(
      data => {this.clients = data},
      err => console.error(err),
      () => console.log('clients loaded')
    );
  }
}
