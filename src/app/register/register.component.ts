import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reister',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice: AuthService,private formBuilder: FormBuilder) { }
  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onRegister() {

  }

}
