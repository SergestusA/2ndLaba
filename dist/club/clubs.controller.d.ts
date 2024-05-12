import { Club } from './club.entity';
import { ClubService } from './clubs.service';
export declare class ClubController {
    private readonly clubService;
    constructor(clubService: ClubService);
    findAll(): Club[];
    findOne(id: number): Club;
    create(createClub: Club): Club;
    update(id: number, updateClub: Club): Club;
    remove(id: number): void;
}
