import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getClients() {
    return this.http.get("/server/api/v1/client/list"); 
  }

  getClient(id: number){
    return this.http.get("/server/api/v1/client/list/" + id); 
  }

  createClient(client){
    let body = JSON.stringify(client);
    return this.http.post("/server/api/v1/client/create", body, HttpOptions); 
  }

  updateClient(id: number, client){
    let body = JSON.stringify(client);
    return this.http.put("/server/api/v1/client/update", body, HttpOptions); 
  }

  deleteClient(id: number){
    return this.http.delete("/server/api/v1/client/delete/" + id); 
  }
}