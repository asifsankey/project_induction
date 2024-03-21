import { Component } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'trial3';
  post:any={};
  vendorCodes: string[] = [];
  pkgPersonNames: string[] = [];
  companyNames: string[] = [];

  constructor(private api:ApicallService, private router:Router){
    
  }
  
  ngOnInit():void{
    this.api.getpost().subscribe(posts =>{
      this.post =posts;
      console.log(posts);
      console.log(this.post);
      this.vendorCodes = Object.keys(this.post);
      console.log(this.vendorCodes);
      Object.keys(this.post).forEach(key => {
        this.pkgPersonNames.push(this.post[key].supplierDetails.pkgPersonName);
        this.companyNames.push(this.post[key].supplierDetails.companyName);
      });
  
      console.log(this.pkgPersonNames,this.companyNames)
    })

   
    }
   
    
    search:string='';
    

  supplierDetails={
    companyName:["XYZ SYSTEMS LTD","XYZ SYSTEMS LTD","GGF SYSTEMS LTD","FSC SYSTEMS LTD","FSC SYSTEMS LTD"],
    companyAddress:["Thane","Thane","Mumbai","Mumbai","Pune"],
    pkgPersonName:["Sanket Pawar","Kiran Sinde","Mohammed Asif","Shubham Pawar","Yash Pawar"],
    email:["Sanket.Pawar@gmail.com","Kiran.Sinde@gmail.com","Mohammed.Asif@gmail.com","Shubham.Pawar@gmail.com","Yash.Pawar@gmail.com"],
    vendorCode:["R12345","R12356","R12357","R12348","R12349"],
    stateCountry:["MAHARASHTRA, INDIA","MAHARASHTRA, INDIA","MAHARASHTRA, INDIA","MAHARASHTRA, INDIA","MAHARASHTRA, INDIA"],
    telNo:["Q5","Q6","Q7","Q8","Q9"],
    faxNo:["Q5","Q6","Q7","Q8","Q9"]
  }

  

  navigateto(vendorCode: string) {
    console.log('Clicked vendor code:', vendorCode);
    // Navigate to a route named 'vendor' and pass the vendor code as a parameter
    this.router.navigate(['/vendor', vendorCode]);
  }

}
