"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const utils_1 = require("./utils");
const prisma = new client_1.PrismaClient();
let MoviesController = class MoviesController {
    async getMovies(id) {
        try {
            let movieSet = await prisma.movieSet.findUnique({
                where: { id },
            });
            if (!movieSet) {
                const movies = (0, utils_1.getRandomMovies)();
                movieSet = await prisma.movieSet.create({
                    data: {
                        id,
                        movies,
                    },
                });
            }
            return { movies: movieSet.movies };
        }
        catch (error) {
            console.error("Error in /movies/:id:", error);
            throw new common_1.InternalServerErrorException("Something went wrong");
        }
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.Render)("movies"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovies", null);
exports.MoviesController = MoviesController = __decorate([
    (0, common_1.Controller)("movies")
], MoviesController);
