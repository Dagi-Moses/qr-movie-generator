import movies from "./data.json";

export function getRandomMovies() {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}
