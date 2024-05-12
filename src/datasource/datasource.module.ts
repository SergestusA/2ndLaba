import { Module } from '@nestjs/common';
import { DatasourceService } from './datasource.service';
import { SubscriptionDataSource } from './datasource.service'; 
import { InventoryDataSource } from './datasource.service'; 

@Module ({
    providers: [DatasourceService, SubscriptionDataSource, InventoryDataSource], 
    exports: [DatasourceService, SubscriptionDataSource, InventoryDataSource], 
})
export class DatasourceModule {}
