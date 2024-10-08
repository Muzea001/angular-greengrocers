import { TestBed } from '@angular/core/testing';

import { GreengrocersService } from './greengrocers.service';

describe('GreengrocersServiceService', () => {
  let service: GreengrocersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreengrocersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
