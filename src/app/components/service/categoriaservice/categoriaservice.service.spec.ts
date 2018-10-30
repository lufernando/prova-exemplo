import { TestBed } from '@angular/core/testing';

import { CategoriaserviceService } from './categoriaservice.service';

describe('CategoriaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaserviceService = TestBed.get(CategoriaserviceService);
    expect(service).toBeTruthy();
  });
});
