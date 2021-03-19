import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imported components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { PromisesComponent } from './components/promises/promises.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { BlogComponent } from './components/blog/blog.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    BrandsComponent,
    PromisesComponent,
    TopProductsComponent,
    BlogComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
