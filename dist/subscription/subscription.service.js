"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
let SubscriptionService = class SubscriptionService {
    constructor() {
        this.subscriptions = [];
    }
    create(subscription) {
        this.subscriptions.push(subscription);
        return subscription;
    }
    findOne(id) {
        return this.subscriptions.find(subscription => subscription.id === id);
    }
    findAll() {
        return this.subscriptions;
    }
    update(id, updatedSubscription) {
        const index = this.subscriptions.findIndex(subscription => subscription.id === id);
        if (index !== -1) {
            this.subscriptions[index] = updatedSubscription;
            return this.subscriptions[index];
        }
        return null;
    }
    remove(id) {
        const index = this.subscriptions.findIndex(subscription => subscription.id === id);
        if (index !== -1) {
            this.subscriptions.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)()
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map