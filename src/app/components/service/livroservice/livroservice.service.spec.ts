import { TestBed } from '@angular/core/testing';

import { LivroserviceService } from './livroservice.service';

describe('LivroserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivroserviceService = TestBed.get(LivroserviceService);
    expect(service).toBeTruthy();
  });
});
