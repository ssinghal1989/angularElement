import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PlaceOrderService {
    constructor(private httpClient: HttpClient) {}

    placeOrder(data) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.httpClient.post('http://localhost:3000/placeOrder', data);
    }
}