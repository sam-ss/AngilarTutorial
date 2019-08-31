import { TestBed, async, inject } from '@angular/core/testing';

import { AaGuard } from './aa.guard';

describe('AaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AaGuard]
    });
  });

  it('should ...', inject([AaGuard], (guard: AaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
