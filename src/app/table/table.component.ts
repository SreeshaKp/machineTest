import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtableComponent } from '../addtable/addtable.component';
import { TableDetailService } from '../table-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  tableDetail: any[] = [];

  constructor(private dialog: MatDialog,
    private router: Router,
    private tableService:TableDetailService) {}
    
  ngOnInit(): void {
    this.tableDetail = this.tableService.getTables();

  }
  goToTableDetail(tableId: string) {
    this.router.navigate(['/table', tableId]); 
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddtableComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });

  }

  onNavigate(){
    this.router.navigate(['/home']);
  }

}
