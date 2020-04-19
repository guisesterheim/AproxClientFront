import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AproxClientService {

  constructor(private http:HttpClient) { }

  getClients() {
    return this.http.get("/server/api/v1/client/list"); 
  }
}
