import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = "https://api.web3forms.com/submit";

  constructor(private http: HttpClient) { }

  //Web3Forms
  saveMessage(data:any) {
    return this.http.post(this.url, data);
  }
}
