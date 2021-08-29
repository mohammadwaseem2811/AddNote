import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  isChecked;
  private loginUrl: string = 'http://172.29.1.208:2006/Api/Login';
  private regUrl: string = 'http://172.29.1.208:2006/Api/Register';
  emailReg: string;
  passwordReg: string;
  passwordRep: string;
  id: string;
  //dashbaordDataChangeSubjectSub: Subscription;
  address:string;
  firstName: string;
  lastName: string;
  regObject: any = {};
  constructor(private common: CommonService, private router: Router, private toast: ToastrService) {
        this.emailReg='';
        this.passwordReg='';
        this.passwordRep='';
        this.id=''
        this.address='';
        this.firstName='';
        this.lastName='';
        if (localStorage.getItem('isChecked') === 'true') {
          this.email = localStorage.getItem('email');
          this.password = localStorage.getItem('password');
          this.isChecked = localStorage.getItem('isChecked');
      }
      else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
      }

       }

  ngOnInit(): void {
      
  }

  checkLogin() {
    let userData = JSON.parse (localStorage.getItem('userData'));
     if(this.email===userData.Email && this.password=== userData.Password){
      localStorage.setItem('isLoggedIn','true');
      this.toast.success(`Login Successfully`);
      this.router.navigateByUrl('/list-note');
     }
      else{
        this.toast.error('Login Failed, Please try again');
        localStorage.setItem('isLoggedIn','false');
      }
  }
  register() {
    localStorage.setItem('userData',JSON.stringify(this.regObject));
  }  

}
