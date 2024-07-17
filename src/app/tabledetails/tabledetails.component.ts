import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableDetailService } from '../table-detail.service';

@Component({
  selector: 'app-tabledetails',
  templateUrl: './tabledetails.component.html',
  styleUrls: ['./tabledetails.component.scss']
})
export class TabledetailsComponent implements OnInit {

  table: any;
  tableDetail: any;
  tables:any;
  constructor(private route: ActivatedRoute, private tableService: TableDetailService) {}

  ngOnInit() {
    const tableId = this.route.snapshot.paramMap.get('id');
    this.tableDetail = this.tableService.getTables();
    this.table = this.tableDetail.find((t:any) => t.id === tableId);

    if (this.table) {
      this.tables = [
        { type: this.table.type, seats:  this.table.noOfSeats},
      ];
    }
    } 
  }
