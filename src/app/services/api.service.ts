import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) {     
  }



// getUsers = () => this.http.get('http://localhost:3000/');


login = (loginInfo) => this.http.post('http://localhost:3030/api/login', loginInfo, httpOptions).toPromise();

}