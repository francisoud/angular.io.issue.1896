import { Component, OnInit } from '@angular/core';
import { NgFor }             from '@angular/common';
import { ContractService }   from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-contract-list',
  templateUrl: 'contract-list.component.html',
  styleUrls: ['contract-list.component.css'],
  providers: [ ContractService ],
  directives: [ NgFor ]
})
export class ContractListComponent implements OnInit {
  contracts: any;

  constructor(private contractService: ContractService) {}

  ngOnInit() {
    this.contracts = this.contractService.getContracts();
  }

}
