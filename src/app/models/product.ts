export class Product {
    constructor(
      public id: number,
      public name: string,
      public barcode: string,
      public quantity: number,
      public category: string,
      public status: 'active' | 'inactive',
      public imageUrl: string
    ) {}
  }
  