import { TestBed } from '@angular/core/testing';

import { PrestapeService } from './prestape.service';

describe('ArticleService', () => {
  let service: PrestapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
