import { TestBed, inject } from '@angular/core/testing';

import { VinhosService } from './vinhos.service';

describe('VinhosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VinhosService]
    });
  });

  it('should be created', inject([VinhosService], (service: VinhosService) => {
    expect(service).toBeTruthy();
  }));
});
