import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //by element
  //selector: '[app-servers]', //by attribut
  //selector: '.app-servers', //by class
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
