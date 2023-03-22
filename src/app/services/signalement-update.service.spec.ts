import { TestBed } from '@angular/core/testing';

import { SignalementUpdateService } from './signalement-update.service';

describe('SignalementUpdateService', () => {
  let service: SignalementUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalementUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
