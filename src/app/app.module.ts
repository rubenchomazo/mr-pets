import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// PrimeNg
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ImageModule } from 'primeng/image';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';

// Services
import { ProductService } from 'src/service/productservice';
import { DashboardService } from 'src/service/dashboardservice';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CarouselModule,
    TagModule,
    InputTextModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    ImageModule,
    ScrollTopModule,
    ScrollPanelModule,
  ],
  providers: [provideAnimationsAsync(), ProductService, DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
