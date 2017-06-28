import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Row, Picture } from './report.interfaces';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  private _rows: Array<Row>;
  private _pictures: Array<Picture>;

  constructor(private serviceReport: ReportService) {
    serviceReport.getData().subscribe( (data) => [this._rows, this._pictures] = data);
  }

  get rows(): Array<Row> {
    return this._rows;
  }

  get pictures(): Array<Picture> {
    return this._pictures;
  }

  ngOnInit() {
  }

}
