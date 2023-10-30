import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './dto/create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createOrder(@Body() bodyRequest: CreateOrderRequest) {
    this.appService.createOrder(bodyRequest);
  }
}
