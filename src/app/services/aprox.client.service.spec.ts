import { TestBed } from '@angular/core/testing';

import { AproxClientService } from './aprox.client.service';

describe('AproxClientService', () => {
  let service: AproxClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AproxClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
