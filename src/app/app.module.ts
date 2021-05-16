import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsService } from "./shared/services/products.service";

@NgModule({
  declarations: [AppComponent, ProductDetailComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
