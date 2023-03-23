import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { GameService } from 'src/app/game.service';
import { NUMBERS } from 'src/app/models';

@Component({
  selector: 'app-number-selection',
  templateUrl: './number-selection.component.html',
  styleUrls: ['./number-selection.component.css']
})
export class NumberSelectionComponent implements OnInit {

  numbers: number[] = []

  constructor(private gameSvc: GameService) {}

  @ViewChild('numbersComponent') numbersComponent!: ElementRef;

  @Output()
  selectedNumber = new Subject<number>

  ngOnInit(): void {
      this.numbers = NUMBERS
  }

  onSelected() {
    this.selectedNumber.next(parseInt(this.numbersComponent.nativeElement.value))
  }


}
