import { Injectable } from '@nestjs/common';
import { Inventory } from './inventory.entity';

@Injectable()
export class InventoryService {
  private inventoryItems: Inventory[] = [];

  create(item: Inventory): Inventory {
    this.inventoryItems.push(item);
    return item;
  }

  findOne(id: number): Inventory {
    return this.inventoryItems.find(item => item.id === id);
  }

  findAll(): Inventory[] {
    return this.inventoryItems;
  }

  update(id: number, updatedItem: Inventory): Inventory {
    const index = this.inventoryItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.inventoryItems[index] = updatedItem;
      return this.inventoryItems[index];
    }
    return null; 
  }

  remove(id: number): boolean {
    const index = this.inventoryItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.inventoryItems.splice(index, 1);
      return true;
    }
    return false; 
  }
}