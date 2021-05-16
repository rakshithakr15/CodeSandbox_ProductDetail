import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  result: any;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProductDetails().subscribe(data =>{
      console.log(data);
      this.result = data;
    })
  }

}
