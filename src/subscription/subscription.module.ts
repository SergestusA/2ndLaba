import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    controllers: [SubscriptionController],
    providers: [SubscriptionService],
    imports: [DatasourceModule],
})

export class SubscriptionModule { }