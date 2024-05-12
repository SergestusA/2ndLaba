"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
let ClubService = class ClubService {
    constructor(datasourceService) {
        this.datasourceService = datasourceService;
    }
    create(club) {
        this.datasourceService.getClubs().push(club);
        return club;
    }
    findOne(id) {
        return this.datasourceService
            .getClubs()
            .find((club) => club.id === id);
    }
    findAll() {
        return this.datasourceService.getClubs();
    }
    update(id, updatedClub) {
        const index = this.datasourceService
            .getClubs()
            .findIndex((club) => club.id === id);
        this.datasourceService.getClubs()[index] = updatedClub;
        return this.datasourceService.getClubs()[index];
    }
    remove(id) {
        const index = this.datasourceService
            .getClubs()
            .findIndex((club) => club.id === id);
        this.datasourceService.getClubs().splice(index, 1);
        return common_2.HttpStatus.OK;
    }
};
exports.ClubService = ClubService;
exports.ClubService = ClubService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService])
], ClubService);
//# sourceMappingURL=clubs.service.js.map