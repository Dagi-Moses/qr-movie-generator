"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomMovies = getRandomMovies;
const data_json_1 = __importDefault(require("./data.json"));
function getRandomMovies() {
    const shuffled = [...data_json_1.default].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}
