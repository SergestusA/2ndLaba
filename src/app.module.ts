import { Module } from '@nestjs/common';
import { clubModule } from './club/club.module'; 
import { SubscriptionModule } from './subscription/subscription.module';
import { InventoryModule } from './inventory/inventory.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [clubModule, DatasourceModule, SubscriptionModule, InventoryModule], 
  controllers: [],
  providers: [],
})
export class AppModule {}
