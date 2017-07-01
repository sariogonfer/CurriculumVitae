import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  form: FormGroup;
  private _subscriptionStatus: number = 0;

  constructor(private _formBuilder: FormBuilder, private _http: Http) {
    this.form = this._formBuilder.group({
      'email': ['', [Validators.required,
      Validators.email]],
      'name': [''],
      'company': ['']
    });
  }

  ngOnInit() {
  }

  get subscriptionStatus(): number {
    return this._subscriptionStatus;
  }

  onSubmit(form: FormGroup): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log('Suscriber data: ', form.getRawValue());

    this._http.post('', JSON.stringify(form.getRawValue()), options)
      .map(res => res.json())
      .subscribe(
        data => this._subscriptionStatus = 1,
        err => this._subscriptionStatus = -1,
        () => console.log('yay')
      );
    }
}
