import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home/home.component';
import { ProductsComponent } from './components/products/products/products.component';
import { BlogsComponent } from './components/blogs/blogs/blogs.component';
import { MyPipePipe } from './core/pipes/my-pipe.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';
import { EnquiryComponent } from './components/enquiry/enquiry/enquiry.component';
import { AboutUsComponent } from './components/about-us/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    BlogsComponent,
    MyPipePipe,
    PageNotFoundComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
