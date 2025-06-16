import { Module } from "@nestjs/common";
import { QrModule } from "./qr/qr.module";
import { MoviesModule } from "./movies/movies.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [QrModule, MoviesModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
