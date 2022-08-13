import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products: any[] = [];
  
  constructor(private generalService: GeneralService, private router: Router) { }

  ngOnInit(): void {
    this.generalService.productsChanged.subscribe((res) => {
      console.log('---->', res);
      this.products = res;
    })
  }

  viewProduct(index: number) {
    this.router.navigate(['/details', index]);
  }
}
