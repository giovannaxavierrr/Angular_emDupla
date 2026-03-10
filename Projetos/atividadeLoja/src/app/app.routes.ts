import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [

  {
    path: 'products',
    component: ProductsList
  },

  {
    path: 'products/:id',
    component: ProductDetail
  },

  {
    path: '**',
    redirectTo: 'products'
  }

];