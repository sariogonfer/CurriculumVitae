import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Paper } from './papers.interfaces';
import { Http } from '@angular/http';

@Injectable()
export class PapersService {

  constructor(private http: Http ) {
  }

  getData(): Observable<Array<Paper>> {
    return this.http
      .get('./assets/data/papers.json')
      .map( data => data.json() as Array<Paper> )
      .do(data => console.log(data))
  }
}
