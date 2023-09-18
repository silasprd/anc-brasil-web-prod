/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocialActionService } from './social-action.service';

describe('Service: SocialAction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialActionService]
    });
  });

  it('should ...', inject([SocialActionService], (service: SocialActionService) => {
    expect(service).toBeTruthy();
  }));
});
