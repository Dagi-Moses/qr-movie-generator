import { Injectable } from "@nestjs/common";
import movies from "./data.json";

@Injectable()
export class MoviesService {
  getRandomMovies() {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
}
