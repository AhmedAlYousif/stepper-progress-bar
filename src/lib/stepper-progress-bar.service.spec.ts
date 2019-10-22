import { TestBed } from '@angular/core/testing';

import { StepperProgressBarService } from './stepper-progress-bar.service';

describe('StepperProgressBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepperProgressBarService = TestBed.get(StepperProgressBarService);
    expect(service).toBeTruthy();
  });
});
