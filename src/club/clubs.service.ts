import { Injectable } from "@nestjs/common";
import { HttpStatus } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service'; 
import { Club } from './club.entity'; 

@Injectable()
export class ClubService {
    constructor(private readonly datasourceService: DatasourceService) {}
  
    create(club: Club): Club {
      this.datasourceService.getClubs().push(club);
      return club;
    }
  
    findOne(id: number): Club {
      return this.datasourceService
        .getClubs()
        .find((club) => club.id === id);
    }
  
    findAll(): Club[] {
      return this.datasourceService.getClubs();
    }
  
    update(id: number, updatedClub: Club): Club {
      const index = this.datasourceService
        .getClubs()
        .findIndex((club) => club.id === id);
      this.datasourceService.getClubs()[index] = updatedClub;
      return this.datasourceService.getClubs()[index];
    }
  
    remove(id: number): HttpStatus {
      const index = this.datasourceService
        .getClubs()
        .findIndex((club) => club.id === id);
      this.datasourceService.getClubs().splice(index, 1);
      return HttpStatus.OK;
    }
}
