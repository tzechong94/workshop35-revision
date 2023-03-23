export const NUMBERS = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
]

export interface Game {
    _id: string,
    gid: number,
    name: string,
    year: number,
    ranking: number,
    usersRated: number,
    url: string,
    image: string
}