import { TestBed } from '@angular/core/testing';

import { ClocksService } from './clocks.service';

describe('ClocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClocksService = TestBed.get(ClocksService);
    expect(service).toBeTruthy();
  });
});
