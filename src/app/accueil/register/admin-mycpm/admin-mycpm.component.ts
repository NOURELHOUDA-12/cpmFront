import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prospect } from 'src/app/models/Prospect';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { ProspectService } from 'src/app/prospect.service';
import { AdminMyCpmService } from 'src/app/Services/admin-my-cpm.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-mycpm',
  templateUrl: './admin-mycpm.component.html',
  styleUrls: ['./admin-mycpm.component.css']
})
export class AdminMYCPMComponent implements OnInit {

  user= new User();
  prospect!:Prospect
  msg='';
  roles!:Role[];
  email!:string;
  idOrg!:number
  roleId!:number;
  user2!:User
  notification=0
  erreur=0
  good=0
  alertInscrire=0
  alertUsernameexiste=0
  alertemailutulise=0
  imgURL:any;
userFile:any;
message:string='';
public imagePath:any;
codeOrg!:string

alerteTel=0
altPassLong=0
altPassCourte=0
altPremiernomCourt=0
altPremiernomLong=0
altnomCourte=0
altnomLong=0
altAdresseCourt=0
altAdresseLong=0


isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';
form: any = {
  username: null,
  email: null,
  password: null
};
constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
closeAlerte(){
  this.alerteTel=0
  this.notification=0
  this. erreur=0
  this. good=0
  this.alertInscrire=0
  this. alertUsernameexiste=0
  this. alertemailutulise=0
  this. altPassLong=0
  this.altPassCourte=0
  this. altPremiernomCourt=0
  this.altPremiernomLong=0
 this. altnomCourte=0
this.altnomLong=0
this.altAdresseCourt=0
this.altAdresseLong=0
}

RegisterUser(formRegistration:NgForm){
   

    const formData=new FormData();
    const user=formRegistration.value;
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile)
  console.log(user);

}

onSelectFile(event:any){
  if (event.target.files.length>0){
    const file=event.target.files[0];
    this.userFile=file;
    //this.f['profile'].setValue(file);
    var mimeType =event.target.files[0].type;
    if(mimeType.match(/image\/*/)==null){
  this.message="Only images are suported.";
  return;
    }
    var reader= new FileReader();
    this.imagePath=file;
    reader.readAsDataURL(file);
    reader.onload=(_event)=>{
      this.imgURL=reader.result;
    }
  }
   }
  onSubmit(): void {
    const { username, email, password } = this.form;
console.log(this.form)
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  onSubmit2(form:NgForm): void {
   this. user=form.value
//const { username, email, password } = this.form;
//console.log(this.form)
console.log(this.user)
    this.authService.register2( this.user.username,this.user.name,this.user.email,this.user.datenaissance,this.user.tel,this.user.adresse,this.user.image,this.user.password).subscribe({
  
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  Save(form:NgForm){
    this.user=form.value
    this.authService.SimpleSave(this.user).subscribe({
  
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    }); 
  }
  createUser(form:NgForm){
    const formData=new FormData();
    const user=form.value;
    console.log(user)
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile)
    this.authService.createUser(formData,2,1).subscribe({
      next: (response:User) => {
        console.log(this.user) 
        this.user=response;
       this.notification=1
      
       form.reset();
       },
      error: (error:HttpErrorResponse) => {
       // alert(error.message);
   
       },
      complete: () => console.info('complete') 
  })

  }
}