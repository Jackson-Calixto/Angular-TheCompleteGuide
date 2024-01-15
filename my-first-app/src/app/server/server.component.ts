import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
getColor() {
  return this.serverStatus === 'online' ? 'green' : 'red';
}
  serverID: number = Math.floor(10*Math.random())+1;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5?'online':'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
