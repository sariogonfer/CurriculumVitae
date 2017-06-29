import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Contact } from './contact.interfaces';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http: Http ) {
  }

  getData(): Observable<Contact> {
    return this.http
      .get('./assets/data/contact.json')
      .map( data => data.json() as Contact )
      .do(data => console.log(data))
  }
}
