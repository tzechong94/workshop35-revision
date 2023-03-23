import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges {

  games: string[] = []

  @Input()
  limit: number = 10

  offset: number = 0

  constructor(private gameSvc: GameService) {}

  ngOnInit(): void {
      // this.gameSvc.getGames(this.limit)
      //   .then(result => {
      //     console.log(result,'result')
      //     this.games = result.map(game=>game.name)
      //   })
      //   .catch(error => console.log(error))
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes, 'changes')
      this.limit = changes['limit'].currentValue
      this.getGames(this.limit, this.offset)      
  }

  previousBtn() {
    this.offset = this.offset-(this.limit)
    if (this.offset < 0) {
      this.offset=0
    }
    console.log('offset', this.offset)
    this.getGames(this.limit, this.offset)      

  }

  nextBtn() {
    this.offset = this.offset+(this.limit)
    console.log('offset', this.offset)

    this.getGames(this.limit, this.offset)      


  }


  getGames(limit:number, offset:number) {
    this.gameSvc.getGames(this.limit, this.offset)
    .then(result => {
      console.log(result,'result')
      this.games = result.map(game=>game.name)
      console.log(this.games)
    })
    .catch(error => console.log(error))

  }

}
