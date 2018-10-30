import { TestBed } from '@angular/core/testing';

import { AutorserviceService } from './autorservice.service';

describe('AutorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorserviceService = TestBed.get(AutorserviceService);
    expect(service).toBeTruthy();
  });
});
