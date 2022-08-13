import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { SpecificProDisplayComponent } from './specific-pro-display/specific-pro-display.component';

const routes: Routes = [
  { path: '', component: DisplayProductComponent },
  { path: 'add', component: AddNewProductComponent },
  { path: 'details/:index', component: SpecificProDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
