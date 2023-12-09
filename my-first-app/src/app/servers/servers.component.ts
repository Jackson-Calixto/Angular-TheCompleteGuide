import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //by element
  //selector: '[app-servers]', //by attribut
  //selector: '.app-servers', //by class
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  
  constructor() {}

  ngOnInit() {}
}
