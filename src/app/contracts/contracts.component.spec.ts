/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContractsComponent } from './contracts.component';

describe('Component: Contracts', () => {
  it('should create an instance', () => {
    let component = new ContractsComponent();
    expect(component).toBeTruthy();
  });
});
