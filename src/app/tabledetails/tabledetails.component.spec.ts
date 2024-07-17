import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledetailsComponent } from './tabledetails.component';

describe('TabledetailsComponent', () => {
  let component: TabledetailsComponent;
  let fixture: ComponentFixture<TabledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabledetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
