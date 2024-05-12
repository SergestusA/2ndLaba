import { Subscription } from './subscription.entity';
export declare class SubscriptionService {
    private subscriptions;
    create(subscription: Subscription): Subscription;
    findOne(id: number): Subscription;
    findAll(): Subscription[];
    update(id: number, updatedSubscription: Subscription): Subscription;
    remove(id: number): boolean;
}
