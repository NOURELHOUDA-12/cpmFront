import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/Services/auth.service';
import { StorgeService } from 'src/app/Services/storge.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  user=new User()
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private router:Router,private authService: AuthService, private storageService: StorgeService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console .log( this.roles)
        console .log(data)
        if( this.roles[0]=="ROLE_ADMIN"){
          console .log("l7mdllh")
      
console.log(data.id)
         this.router.navigate(['cpm']);
        }
        else{
        if( this.roles[0]=="ROLE_USER"){
          console .log("l7mdllh")
      
console.log(data.id)
         this.router.navigate(['myCpm']);
        }
      }
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    console.log("bravo")
    //window.location.reload();
  }

}
