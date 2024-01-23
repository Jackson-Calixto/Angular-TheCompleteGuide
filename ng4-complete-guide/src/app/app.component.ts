import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'], //it's between [] because is an array an can have multiple styles separated by ,
  styles: [`
    h3{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {}
