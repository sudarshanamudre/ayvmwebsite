import { TestBed } from '@angular/core/testing';

import { AyvmServiceService } from './ayvm-service.service';

describe('AyvmServiceService', () => {
  let service: AyvmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyvmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
