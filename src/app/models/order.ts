import { Product } from './product';

export class Order {
  constructor(
    public id: number,
    public client: Client,
    public products: OrderProduct[],
    public totalAmount: number
  ) {}
}

export class OrderProduct {
  constructor(
    public product: Product,
    public quantity: number
  ) {}
}
