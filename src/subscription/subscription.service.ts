import { Injectable } from '@nestjs/common';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
  private subscriptions: Subscription[] = [];

  create(subscription: Subscription): Subscription {
    this.subscriptions.push(subscription);
    return subscription;
  }

  findOne(id: number): Subscription {
    return this.subscriptions.find(subscription => subscription.id === id);
  }

  findAll(): Subscription[] {
    return this.subscriptions;
  }

  update(id: number, updatedSubscription: Subscription): Subscription {
    const index = this.subscriptions.findIndex(subscription => subscription.id === id);
    if (index !== -1) {
      this.subscriptions[index] = updatedSubscription;
      return this.subscriptions[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.subscriptions.findIndex(subscription => subscription.id === id);
    if (index !== -1) {
      this.subscriptions.splice(index, 1);
      return true;
    }
    return false; 
  }
}
