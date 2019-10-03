import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { error } from '@angular/compiler/src/util';
import { ActivatedRoute, Router } from '@angular/router';
import  state  from '../../app-state';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  addUserButton: boolean = true;
  delUserButton: boolean = true;
  host: string = '185.255.96.123';
  port: string = '3050';
  database: string = '/var/lib/firebird/2.5/data/counter.fdb';
  user: string = 'U_VIEW';
  password: string = 'clv8bzg1';
  departmetsList: Array <string> = []
  st = state;

  constructor(
    private api: ApiService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

ngOnInit() {
  }

async getCountersList() {
  console.log({
    host: this.host,
    port: this.port,
    database: this.database,
    user: this.user,
    password: this.password,
    getDepProd: true
  });

  this.api.log();
  let result: any = await this.api.countersList({
  host: this.host,
  port: this.port,
  database: this.database,
  user: this.user,
  password: this.password,
  getDepProd: true
});

console.log(Object.entries(result));
this.departmetsList = Object.values(result);
console.log(this.departmetsList);
}

}
