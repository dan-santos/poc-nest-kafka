import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
