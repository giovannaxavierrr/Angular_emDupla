import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product-interface';
import { RouterLink } from '@angular/router';
import { Container } from '../../container/container';

@Component({
  selector: 'app-product-detail',
  imports: [
    RouterLink,
    Container
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})

export class ProductDetail implements OnInit {

  produto?: Product;

  carregando = true;
  erro = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.buscarProdutoPorId(id).subscribe({

      next: (dados) => {
        this.produto = dados;
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