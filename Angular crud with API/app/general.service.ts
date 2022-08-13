import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  products: any[] = [];

  productsChanged = new BehaviorSubject<any>([]);

  constructor(private router: Router) { }

  addProduct(product: any) {
    this.products.push(product);
    this.router.navigate(['']);
    this.productsChanged.next(this.products);
  }

}
