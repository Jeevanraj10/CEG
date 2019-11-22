import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../_services/auth.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user =>{
     this.isAuthenticated = !!user;
     console.log(!user);
     console.log(!!user);
     
     
   });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
