import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';
import { UserService } from '../services/user.service';
import { HomeComponent } from './home.component';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'content',
  template: `
   <header></header>
    <div class="content container">
      <div class="row">
        <div class="twelve columns">
         <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <footer></footer>
    `,

})
export class ContentComponent {
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    if (!this._userService.getCurrentUser()) {
      this._router.navigate(['login']);
    } else {
      this._router.navigate(['/home']);
    }
  }
  currentUser: User;

  whenLoggedIn(user: User) {
    this.currentUser = user;
  }

  whenLoggedOut() {
    this.currentUser = undefined;
  }


}