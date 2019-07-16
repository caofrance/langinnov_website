import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construction',
  templateUrl: 'under-construction.html',
  styleUrls: ['./under-construction.scss'],
})
export class UnderConstructionComponent {
  loginForm: FormGroup;
  private isSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      password: ['', [
        Validators.required,
      ]],
    });
  }

  login(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    // Allow entrance to website
    console.log('Entrance allowed !!!!');
    console.log(this.loginForm.getRawValue().password);
    window.sessionStorage.setItem('allowed', this.loginForm.getRawValue().password);
    this.router.navigate(['/home']).catch((_) => {
      console.error('Failed to navigate to route!!!');
    });
  }




}
