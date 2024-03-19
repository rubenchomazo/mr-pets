import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/domain/brand';
import { Gallery } from 'src/domain/gallery';
import { Product } from 'src/domain/product';
import { DashboardService } from 'src/service/dashboardservice';
import { ProductService } from 'src/service/productservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: Product[] | any;
  galleryList: Gallery[] | any;
  brandList: Brand[] | any;

  responsiveOptions: any[] | undefined;
  text: any;

  constructor(
    private productService: ProductService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
    this.dashboardService.getGallerySmall().then((gallery) => {
      this.galleryList = gallery;
    });
    this.dashboardService.getBrand().then((brandList) => {
      this.brandList = brandList;
    });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
