import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicallService } from './services/apicall.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { VendorComponent } from './vendor/vendor.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageviewnewComponent } from './imageviewnew/imageviewnew.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VendorComponent,
    HomeComponent,
    ImageviewnewComponent
    
   
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-right', 
      preventDuplicates: true, 
      closeButton: true, 
      progressBar: true, 
      progressAnimation: 'decreasing'
    
    })
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
