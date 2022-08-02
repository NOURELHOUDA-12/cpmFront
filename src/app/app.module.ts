import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './accueil/page-accueil/page-accueil.component';
import { LoginComponent } from './accueil/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuMycpmComponent } from './menu/menu-mycpm/menu-mycpm.component';
import { CpmComponent } from './menu/cpm/cpm.component';
import { AdminMYCPMComponent } from './accueil/register/admin-mycpm/admin-mycpm.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    LoginComponent,
    MenuMycpmComponent,
    CpmComponent,
    AdminMYCPMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
