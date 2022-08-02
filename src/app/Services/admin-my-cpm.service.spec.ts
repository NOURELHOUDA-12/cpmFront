import { TestBed } from '@angular/core/testing';

import { AdminMyCpmService } from './admin-my-cpm.service';

describe('AdminMyCpmService', () => {
  let service: AdminMyCpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMyCpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
