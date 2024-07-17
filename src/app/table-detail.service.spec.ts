import { TestBed } from '@angular/core/testing';

import { TableDetailService } from './table-detail.service';

describe('TableDetailService', () => {
  let service: TableDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
