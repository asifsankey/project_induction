import { Component } from '@angular/core';
import { ApicallService } from './services/apicall.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trial3';
  post:any={};

  constructor(private api:ApicallService, private router:Router){}
  
  ngOnInit():void{
    this.api.getpost().subscribe(posts =>{
      this.post =posts;
      console.log(posts)
      console.log(this.post)
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
