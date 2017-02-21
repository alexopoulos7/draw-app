import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models/user';
import { UserDetails } from '../models/userDetails';

var GUEST: User = { email: 'guest@curriculr.org', name: "Guest User", loggedIn: false };

@Injectable()
export class UserService {
    constructor(private http: Http) {
        this.http.get('http://localhost:3002/ping');

    }
    private serverUrl = 'http://localhost:3002/api/login';

    login(username: string, password: string): Observable<UserDetails> {
        let bodyString = JSON.stringify({ username: username, password: password }); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.serverUrl, bodyString, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error in Login'));

        //localStorage.setItem('cu', GUEST.email);
        //return GUEST;
    }

    logout() {
        localStorage.removeItem('cu');
        localStorage.removeItem('loggedIn');
    }

    getCurrentUser() {
        return localStorage.getItem('cu');
    }
}