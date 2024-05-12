import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    controllers: [InventoryController],
    providers: [InventoryService],
    imports: [DatasourceModule],
})

export class InventoryModule { }