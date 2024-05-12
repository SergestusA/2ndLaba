import { Inventory } from './inventory.entity';
export declare class InventoryService {
    private inventoryItems;
    create(item: Inventory): Inventory;
    findOne(id: number): Inventory;
    findAll(): Inventory[];
    update(id: number, updatedItem: Inventory): Inventory;
    remove(id: number): boolean;
}
