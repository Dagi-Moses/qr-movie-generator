import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Render,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { getRandomMovies } from "./utils";

const prisma = new PrismaClient();

@Controller("movies")
export class MoviesController {
  @Get(":id")
  @Render("movies")
  async getMovies(@Param("id") id: string) {
    try {
      let movieSet = await prisma.movieSet.findUnique({
        where: { id },
      });

      if (!movieSet) {
        const movies = getRandomMovies();
        movieSet = await prisma.movieSet.create({
          data: {
            id,
            movies,
          },
        });
      }

      return { movies: movieSet.movies };
    } catch (error) {
      console.error("Error in /movies/:id:", error);
      throw new InternalServerErrorException("Something went wrong");
    }
  }
}
