import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accueil/login/login.component';
import { PageAccueilComponent } from './accueil/page-accueil/page-accueil.component';
import { AdminMYCPMComponent } from './accueil/register/admin-mycpm/admin-mycpm.component';
import { CpmComponent } from './menu/cpm/cpm.component';
import { MenuMycpmComponent } from './menu/menu-mycpm/menu-mycpm.component';

const routes: Routes = [
  {path:'',component:PageAccueilComponent},
  {path:'login',component:LoginComponent},
  {path:'myCpm',component:MenuMycpmComponent},
  {path:'cpm',component:CpmComponent},
  {path:'registerAdmin',component:AdminMYCPMComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
