import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    findAll(): Subscription[];
    findOne(id: string): Subscription;
    create(subscription: Subscription): Subscription;
    update(id: string, updatedSubscription: Subscription): Subscription;
    remove(id: string): boolean;
}
