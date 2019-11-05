import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
                                'Content-Type': 'application/json',
                                'token': this.cookie.get('token')
                              }),
                        };

  constructor(private http: HttpClient,
              private cookie: CookieService)
               {
      
  }


log = () => {console.log('token=' + this.cookie.get('token'));
//this.httpOptions.headers.cookies = {'token': this.cookie.get('token')};
console.log(this.httpOptions)};
// getUsers = () => this.http.get('http://localhost:3000/');


login = loginInfo => this.http.post('http://localhost:3030/api/login', loginInfo, this.httpOptions).toPromise();

countersList = userInfo => this.http.post('http://localhost:3030/api/apidbadmin', userInfo, this.httpOptions).toPromise();
}
