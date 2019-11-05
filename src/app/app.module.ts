import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { HttpClientModule }    from '@angular/common/http';
import { StartComponent } from './pages/start/start.component';
import { AdminComponent } from './pages/admin/admin.component';
import { WorkComponent } from './pages/work/work.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MessagerComponent } from './components/messager/messager.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AdminComponent,
    WorkComponent,
    NavComponent,
    MessagerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
