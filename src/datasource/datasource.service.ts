import { Injectable } from "@nestjs/common";
import { Club } from "src/club/club.entity";
import { Subscription } from "src/subscription/subscription.entity";
import { Inventory } from "src/inventory/inventory.entity";

@Injectable()
export class DatasourceService {
    private clubs: Club[] = [];

    getClubs(): Club[] {
        return this.clubs;
    }
}

@Injectable()
export class SubscriptionDataSource {
    private subscriptions: Subscription[] = [];

    getSubscriptions(): Subscription[] {
        return this.subscriptions;
    }
}
@Injectable()
export class InventoryDataSource {
    private items: Inventory[] = [];

    getInventoryItems(): Inventory[] {
        return this.items;
    }
}