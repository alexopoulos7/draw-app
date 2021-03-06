import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: '../templates/login.component.html',
    providers: [UserService]
})

export class LoginComponent {
    username: string;
    password: string;
    login_error: string;
    currentUser: User;

    constructor(private userService: UserService, private _router: Router) {
        this.login_error = '';
    }
    login() {
        if (!this.username || !this.password) {
            this.login_error = 'Please fill in both username and password';
            return;
        }
        this.userService.login(this.username, this.password)
            .subscribe(
            use => {
                console.log('some user ' + JSON.stringify(use))
                let cu: User = { email: use.email, name: use.username, loggedIn: true };
                localStorage.setItem('cu', cu.name);
                localStorage.setItem('loggedIn', cu.loggedIn.toString());
                this._router.navigate(['/home']);
            },
            err => { this.login_error = err; console.log(err); });

    }
}

