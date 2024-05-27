import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product(0, '', '', 0, '', 'active', '');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  saveProduct(): void {
    if (this.product.id === 0) {
      this.product.id = this.productService.getAllProducts().length + 1;
      this.productService.addProduct(this.product);
    } else {
      this.productService.updateProduct(this.product);
    }
    this.resetForm();
  }

  resetForm(): void {
    this.product = new Product(0, '', '', 0, '', 'active', '');
  }
}
