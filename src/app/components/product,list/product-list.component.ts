import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  editProduct(product: Product): void {
    // Logic for editing product
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getAllProducts();
  }
}
