import { Injectable, InternalServerErrorException } from "@nestjs/common";
import * as QRCode from "qrcode";
import { v4 as uuidv4 } from "uuid";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class QrService {
  constructor(private configService: ConfigService) {}
  async generateQr(): Promise<{ qr: string; id: string }> {
    try {
      const id = uuidv4();
      const baseUrl = this.configService.get<string>("BASE_URL");
      const link = `${baseUrl}/movies/${id}`;
      const qr = await QRCode.toDataURL(link);
      return { qr, id };
    } catch (error) {
      console.error("Error generating QR code:", error);
      throw new InternalServerErrorException("Failed to generate QR code");
    }
  }
}
