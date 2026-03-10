import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product-interface';
import { Container } from '../../container/container';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    RouterLink,
    Container
  ],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList implements OnInit {

  produtos: Product[] = [];

  carregando = true;
  erro = false;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.productService.listarProdutos().subscribe({

      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
        this.cdr.detectChanges();
      },

      error: () => {
        this.erro = true;
        this.carregando = false;
        this.cdr.detectChanges();
      }

    });

  }

}