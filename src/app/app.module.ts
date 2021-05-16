import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from "./products.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ProductDetailComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
