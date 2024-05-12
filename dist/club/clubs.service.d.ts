import { HttpStatus } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Club } from './club.entity';
export declare class ClubService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(club: Club): Club;
    findOne(id: number): Club;
    findAll(): Club[];
    update(id: number, updatedClub: Club): Club;
    remove(id: number): HttpStatus;
}
