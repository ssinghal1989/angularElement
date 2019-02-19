import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {
    constructor(private http: HttpClient) { }

    getGraphData() {
        return this.http.get('http://www.mocky.io/v2/5bc066e73200004f006a31ef');
    }
}