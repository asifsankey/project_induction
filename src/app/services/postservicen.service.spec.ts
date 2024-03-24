import { TestBed } from '@angular/core/testing';

import { PostservicenService } from './postservicen.service';

describe('PostservicenService', () => {
  let service: PostservicenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostservicenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
