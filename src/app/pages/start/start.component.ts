import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { error } from '@angular/compiler/src/util';
import { ActivatedRoute, Router } from '@angular/router';
import  state  from '../../app-state';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.sass']
})
export class StartComponent implements OnInit {
  userName: string = 'Admin';
  pswd: string = 'Admin';
  st = state;
  constructor(
    private api: ApiService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
async submit() {
  // console.log(this.st.acceptTerms);
 if (this.st.acceptTerms) await this.auth()
 else {this.st.messager = {
   show: true,
   messageType: 'information',
   message: 'you have to accept listed above conditions'
  }
}}
  async auth() {
    try {
      const result: any = await this.api.login({
        userName: this.userName,
        pswd: this.pswd
      });

      if (!result || result.error)       throw error('user not exist');

      this.cookieService.set('token', `${result.cookie}`);
      if (result.admin) {
        this.router.navigate([`/admin`]);
      }
    }
    catch (error) {
      this.st.messager = {
      show: true,
      messageType: 'error',
      message: error
     }
console.log(error);
    }
  }
}
