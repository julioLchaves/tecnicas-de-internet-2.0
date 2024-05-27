import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  constructor() {}

  getAllOrders(): Order[] {
    return this.orders;
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }
}
