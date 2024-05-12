import { Module } from '@nestjs/common';
import { ClubController } from './clubs.controller';
import { ClubService } from './clubs.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    controllers: [ClubController],
    providers: [ClubService],
    imports: [DatasourceModule],
})

export class clubModule {}