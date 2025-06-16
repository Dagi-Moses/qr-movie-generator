import { Controller, Get, Render } from "@nestjs/common";
import { QrService } from "./qr.service";

@Controller()
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  @Render("qr")
  async showQr() {
    const { qr } = await this.qrService.generateQr();
    return { qr };
  }

  @Get("/api/qr")
  async getQrJson() {
    const { qr } = await this.qrService.generateQr();
    return { qr };
  }
}
