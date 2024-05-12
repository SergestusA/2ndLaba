import { Inventory } from './inventory.entity';
import { InventoryService } from './inventory.service';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findAll(): Inventory[];
    findOne(id: string): Inventory;
    create(item: Inventory): Inventory;
    update(id: string, updatedItem: Inventory): Inventory;
    remove(id: string): boolean;
}
