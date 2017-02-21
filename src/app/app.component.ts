import { Component } from '@angular/core';
import { FooterComponent } from './components/footer.component';
import { ContentComponent } from './components/content.component';
import { LoginComponent } from './components/login.component';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'draw-app',
  template: `<content></content>`,
  providers: [UserService]
})

export class AppComponent {
  constructor(private _router: Router) { }
  ngOnInit() {
    this._router.navigate(['/login']);
  }
}
