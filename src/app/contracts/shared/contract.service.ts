import { Injectable } from '@angular/core';

export var CONTRACTS: any = [
  { id: 1, validFrom: '26/05/2001', validTo: '26/05/2026' },
  { id: 2, validFrom: '26/05/2001', validTo: '26/05/2026' },
  { id: 3, validFrom: '26/05/2001', validTo: '26/05/2026' }
];

@Injectable()
export class ContractService {

  constructor() {}

  getContracts(): any {
    return CONTRACTS;
  }
}
