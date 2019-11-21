import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  registerForm: FormGroup;
  error: string = null;

  constructor(private authservice: AuthService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onRegister(form: FormGroup) {
    if (!this.registerForm.valid) {
      return;
    }
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signUp(email, password).subscribe(
      (responseData) => {
        console.log(responseData);
        this.router.navigate(['']);
        this.isLoading = false;

      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });
    form.reset();
  }
}
