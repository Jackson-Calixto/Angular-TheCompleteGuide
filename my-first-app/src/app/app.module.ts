import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule to the imports array
  bootstrap: [AppComponent],
})
export class AppModule {}
