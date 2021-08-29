import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean;
  constructor(private router: Router, private toast: ToastrService ) { }

  ngOnInit(): void {

  }
  onLogout(){
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('/login');
    this.toast.success('Logout Successfully');
  }

}
