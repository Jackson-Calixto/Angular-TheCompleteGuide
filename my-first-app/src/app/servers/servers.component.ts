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
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated: boolean;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
