import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs/blogs.component';
import { EnquiryComponent } from './components/enquiry/enquiry/enquiry.component';
import { HomeComponent } from './components/home/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products/products.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"enquiry",component:EnquiryComponent},
  {path:"products",component:ProductsComponent},
  {path:"blogs",component:BlogsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
