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

  addUserButton: boolean = Boolean(true);
  delUserButton: boolean = Boolean(true);
  newUserHide: boolean = Boolean(true);
  newUserPasswordHide: boolean = Boolean(true);
  departmentsListHide: boolean = Boolean(true);
  host: string = String('185.255.96.123'); // = String('185.255.96.123');
  port: string = String('3050'); // = String('3050');
  database: string = String('/var/lib/firebird/2.5/data/counter.fdb'); // = String('/var/lib/firebird/2.5/data/counter.fdb');
  user: string = String('U_VIEW');// = String('U_VIEW');
  password: string = String('clv8bzg1'); // = String('clv8bzg1');
  newUser: string = String('');
  newUserPassword: string = String('');
  delUser: string = String('');
  departmetsList: Array <string> = [];
  point: string = String('');
  st = state;

  constructor(
    private api: ApiService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

ngOnInit() {
  }

async addUser() {
  console.log('ADD');
}

checkAdminValues(): boolean {
  // console.log(Boolean(this.host.trim() && this.port.trim() && this.database && this.user && this.password));
  return Boolean(this.host.trim() && this.port.trim() && this.database.trim() && this.user.trim() && this.password.trim());
}

checkNewUserValues(): boolean {
  //console.log(Boolean(this.checkAdminValues() && this.newUserPassword && this.newUser));
  return Boolean(this.checkAdminValues() && this.newUser.trim() && this.newUserPassword.trim());
}

checkNewUsername(): boolean {
  // console.log(Boolean(this.checkAdminValues() && this.newUserPassword && this.newUser));
  return Boolean(this.checkAdminValues() && this.newUser.trim());
}

checkDelUserValues(): boolean  {{
  // console.log(Boolean(this.checkAdminValues() && this.newUserPassword && this.newUser));
  return Boolean(this.checkAdminValues() && this.delUser.trim());
}}

makeCheckedList(event) {
  console.log("List here", event);
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
// console.log(this.departmetsList);
}

}
