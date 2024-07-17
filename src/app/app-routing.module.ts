import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TabledetailsComponent } from './tabledetails/tabledetails.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path:'',component: TableComponent },
  { path: 'table/:id', component: TabledetailsComponent },
  { path: 'home', component: HomePageComponent }
  
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
