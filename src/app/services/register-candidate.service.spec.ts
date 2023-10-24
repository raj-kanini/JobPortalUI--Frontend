import { TestBed } from '@angular/core/testing';

import { RegisterCandidateService } from './register-candidate.service';

describe('RegisterCandidateService', () => {
  let service: RegisterCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
