import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApplicationHttpClient } from './app.httpclient';

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:ApplicationHttpClient) { }

  getClients() {
    return this.http.Get("/server/api/v1/client/list"); 
  }

  getClient(id: number){
    return this.http.Get("/server/api/v1/client/list/" + id); 
  }

  createClient(client){
    let body = JSON.stringify(client);
    return this.http.Post("/server/api/v1/client/create", body); 
  }

  updateClient(id: number, client){
    let body = JSON.stringify(client);
    return this.http.Put("/server/api/v1/client/update", body); 
  }

  deleteClient(id: number){
    return this.http.Delete("/server/api/v1/client/delete/" + id); 
  }
}