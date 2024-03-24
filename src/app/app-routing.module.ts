import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { HomeComponent } from './home/home.component';
import { ImageviewnewComponent } from './imageviewnew/imageviewnew.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'vendor', component:VendorComponent  },
  { path: 'vendor/:vendorCode', component: VendorComponent },
  
  {path:'imageviewnew/:imageurl', component: ImageviewnewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
