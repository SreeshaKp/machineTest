import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDetailService {
  private tables: any[] = [];

  addTables(tables: any) {
    this.tables.push(tables);
  }

  getTables() {
    return this.tables;
  }
}
