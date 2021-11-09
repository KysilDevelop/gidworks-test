import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-contract-list',
  templateUrl: './app-contract-list.component.html',
  styleUrls: ['./app-contract-list.component.scss']
})
export class AppContractListComponent {

  searchText: string = "";

  contracts = [
    {
      title: 'The Part of the contract',
      name: 'Grace',
      hours: 0
    },
    {
      title: 'The Part of the contract',
      name: 'Grace',
      hours: 2
    },
    {
      title: 'The Part of the contract',
      name: 'Grace',
      hours: 0
    },
    {
      title: 'The Part of the contract',
      name: 'Grace',
      hours: 0
    },
  ]


}
