import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { Inventory } from './inventory.entity';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  findAll(): Inventory[] {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Inventory {
    return this.inventoryService.findOne(+id);
  }

  @Post()
  create(@Body() item: Inventory): Inventory {
    return this.inventoryService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedItem: Inventory): Inventory {
    return this.inventoryService.update(+id, updatedItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.inventoryService.remove(+id);
  }
}
