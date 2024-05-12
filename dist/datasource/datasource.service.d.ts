import { Club } from "src/club/club.entity";
import { Subscription } from "src/subscription/subscription.entity";
import { Inventory } from "src/inventory/inventory.entity";
export declare class DatasourceService {
    private clubs;
    getClubs(): Club[];
}
export declare class SubscriptionDataSource {
    private subscriptions;
    getSubscriptions(): Subscription[];
}
export declare class InventoryDataSource {
    private items;
    getInventoryItems(): Inventory[];
}
