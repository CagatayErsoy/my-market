import { Component, OnInit } from '@angular/core';
import productData from './products.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products: any = productData;
  constructor() { }

  ngOnInit(): void {
    
  }

}
