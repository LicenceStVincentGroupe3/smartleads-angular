import { TestBed } from '@angular/core/testing';

import { GetNbEntityService } from './get-nb-entity.service';

describe('GetNbEntityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetNbEntityService = TestBed.get(GetNbEntityService);
    expect(service).toBeTruthy();
  });
});
