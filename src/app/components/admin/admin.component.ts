import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public clients;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClients().subscribe(
      data => {this.clients = data},
      err => console.error(err),
      () => console.log('clients loaded')
    );
  }
}
