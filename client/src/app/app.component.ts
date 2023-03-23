import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  selectedNumber: number = 15
  selectPageNumber(selectedNumber: number) {
    this.selectedNumber = selectedNumber
  }
}
