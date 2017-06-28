import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Row, Picture } from './report.interfaces';
import { Http } from '@angular/http';

@Injectable()
export class ReportService {

  constructor(private http: Http ) {
  }

  getData(): Observable<[Row[], Picture[]]> {
    return this.http
      .get('./assets/data/report.json')
      .map(x => x.json() )
      .map( (data) => [<Row[]>data.rows, <Picture[]>data.pictures])
  }
}
