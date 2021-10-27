import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  emailForm: FormGroup;
  submitted = false;
  ok = false;
  constructor(private myformBuilder: FormBuilder) { 
    this.emailForm = this.myformBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]

    })}
    onSubmit() {
      this.submitted = true;
      if (this.emailForm.invalid) {
      return; /* no code will be executed after this point */
      }
      this.ok = true;
      }

  ngOnInit(): void {
  }

}
