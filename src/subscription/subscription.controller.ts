import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  findAll(): Subscription[] {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Subscription {
    return this.subscriptionService.findOne(+id);
  }

  @Post()
  create(@Body() subscription: Subscription): Subscription {
    return this.subscriptionService.create(subscription);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedSubscription: Subscription): Subscription {
    return this.subscriptionService.update(+id, updatedSubscription);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.subscriptionService.remove(+id);
  }
}
