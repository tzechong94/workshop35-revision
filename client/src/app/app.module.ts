import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberSelectionComponent } from './components/number-selection/number-selection.component';
import { DisplayComponent } from './components/display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    NumberSelectionComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
