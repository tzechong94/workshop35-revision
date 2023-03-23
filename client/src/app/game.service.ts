import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Game } from "./models";



const GAMES_URL = 'http://localhost:8080/api/games'

@Injectable()
export class GameService {

    constructor(private http: HttpClient){}

    games!: Game[]

    getGames(limit:number, offset:number): Promise<Game[]> {
        const params = new HttpParams()
            .set('limit', limit)
            .set('offset', offset)

        return firstValueFrom(
            this.http.get<Game[]>(GAMES_URL, { params })
        ).then(result => {
            this.games = result.map(
                (g:any) => (
                    {
                    name: g.name
                    } as Game
                )
            )
            return this.games
        })
        
    }
}