"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubModule = void 0;
const common_1 = require("@nestjs/common");
const clubs_controller_1 = require("./clubs.controller");
const clubs_service_1 = require("./clubs.service");
const datasource_module_1 = require("../datasource/datasource.module");
let clubModule = class clubModule {
};
exports.clubModule = clubModule;
exports.clubModule = clubModule = __decorate([
    (0, common_1.Module)({
        controllers: [clubs_controller_1.ClubController],
        providers: [clubs_service_1.ClubService],
        imports: [datasource_module_1.DatasourceModule],
    })
], clubModule);
//# sourceMappingURL=club.module.js.map