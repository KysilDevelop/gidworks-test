import { Component, OnInit} from '@angular/core';
import { AppTopBarComponent } from '../app-top-bar/app-top-bar.component';
import { AppContractListComponent } from '../app-contract-list/app-contract-list.component';

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
