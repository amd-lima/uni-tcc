import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  emailTutor: string = 'tutor@email.com';
  emailStudent: string = 'student@email.com';
  showInvalidEmailMsg: boolean = false;

  constructor(private router: Router) { }

  checkEmail() {
    if (this.email === this.emailTutor) {
      this.router.navigate(['/coach']);
    } else if (this.email === this.emailStudent) {
      this.router.navigate(['/student']);
    } else {
      this.showInvalidEmailMsg = true
    }
  }
}
