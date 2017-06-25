import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Row } from './report.models';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  rows: Array<Row>;

  constructor(private serviceReport: ReportService) {
    serviceReport.getData().subscribe( (rows) => this.rows = rows);
  }

  ngOnInit() {
  }

}
