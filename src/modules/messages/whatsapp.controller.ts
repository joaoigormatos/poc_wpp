import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('whatsapp/webhook')
export class WhatsappController {
  @Post()
  @HttpCode(200)
  handleIncomingMessage(@Body() body: any) {
    console.log('handle message from whapi', JSON.stringify(body, null, 2));
  }

  @Put()
  @HttpCode(200)
  handleIncomingPutMessage(@Body() body: any) {
    console.log('handle message from whapi put', JSON.stringify(body, null, 2));
  }

  @Patch()
  @HttpCode(200)
  handleIncomingPatchMessage(@Body() body: any) {
    console.log(
      'handle message from whapi patch',
      JSON.stringify(body, null, 2),
    );
  }

  @Delete()
  @HttpCode(200)
  handleIncomingDeleteMessage(@Body() body: any) {
    console.log(
      'handle message from whapi delete',
      JSON.stringify(body, null, 2),
    );
  }
}
