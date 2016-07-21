/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ContractService } from './contract.service';

describe('Contract Service', () => {
  beforeEachProviders(() => [ContractService]);

  it('should ...',
      inject([ContractService], (service: ContractService) => {
    expect(service).toBeTruthy();
  }));
});
