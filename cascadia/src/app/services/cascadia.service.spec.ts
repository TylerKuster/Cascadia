import { TestBed } from '@angular/core/testing';

import { CascadiaService } from './cascadia.service';

describe('CascadiaService', () => {
  let service: CascadiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CascadiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
