import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

  public clientRegister;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClientRegister(this.route.snapshot.params.id);
  }

  getClientRegister(id: number){
    this.clientService.getClient(id).subscribe(
      data => {
        this.clientRegister = data.body;
      },
      err => console.error(err),
      () => console.log('client loaded')
    );
  }
}