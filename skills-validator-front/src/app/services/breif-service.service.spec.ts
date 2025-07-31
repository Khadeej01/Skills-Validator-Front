import { TestBed } from '@angular/core/testing';

import { BreifServiceService } from './breif-service.service';

describe('BreifServiceService', () => {
  let service: BreifServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreifServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
