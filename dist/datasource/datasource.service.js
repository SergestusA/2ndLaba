"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryDataSource = exports.SubscriptionDataSource = exports.DatasourceService = void 0;
const common_1 = require("@nestjs/common");
let DatasourceService = class DatasourceService {
    constructor() {
        this.clubs = [];
    }
    getClubs() {
        return this.clubs;
    }
};
exports.DatasourceService = DatasourceService;
exports.DatasourceService = DatasourceService = __decorate([
    (0, common_1.Injectable)()
], DatasourceService);
let SubscriptionDataSource = class SubscriptionDataSource {
    constructor() {
        this.subscriptions = [];
    }
    getSubscriptions() {
        return this.subscriptions;
    }
};
exports.SubscriptionDataSource = SubscriptionDataSource;
exports.SubscriptionDataSource = SubscriptionDataSource = __decorate([
    (0, common_1.Injectable)()
], SubscriptionDataSource);
let InventoryDataSource = class InventoryDataSource {
    constructor() {
        this.items = [];
    }
    getInventoryItems() {
        return this.items;
    }
};
exports.InventoryDataSource = InventoryDataSource;
exports.InventoryDataSource = InventoryDataSource = __decorate([
    (0, common_1.Injectable)()
], InventoryDataSource);
//# sourceMappingURL=datasource.service.js.map