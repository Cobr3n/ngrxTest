import { TestBed } from '@angular/core/testing';

import { GithubreposService } from './githubrepos.service';

describe('GithubreposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubreposService = TestBed.get(GithubreposService);
    expect(service).toBeTruthy();
  });
});
