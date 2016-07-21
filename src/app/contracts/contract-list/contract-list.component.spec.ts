/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContractListComponent } from './contract-list.component';

describe('Component: ContractList', () => {
  it('should create an instance', () => {
    let component = new ContractListComponent();
    expect(component).toBeTruthy();
  });
});
