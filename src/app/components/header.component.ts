import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    constructor(private _userService: UserService, private _router: Router) { }

    logout() {
        this._userService.logout();
        this._router.navigate(['/login']);
    }

}