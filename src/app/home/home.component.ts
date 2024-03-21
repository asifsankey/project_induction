import { Component } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
  filteredData: string[]=[];
  printingid:string[]=[]
  search:string='';

  constructor(private api:ApicallService, private router:Router,private toastr: ToastrService){
   
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
      this.printingid =this.vendorCodes;
  
      console.log(this.pkgPersonNames,this.companyNames)
    })

   
    }

    saafsafai(){
        this.printingid=[];
        this.pkgPersonNames = [];
        this.companyNames = [];
    }

    searchele() {
    
      this.filteredData = this.vendorCodes.filter(item => {
        return item.toLowerCase().includes(this.search.toLowerCase());
      });
      if (this.filteredData.length > 0) {
        // Clear previous data
        this.saafsafai();
        // Push filtered data
        Object.keys(this.post).forEach(key => {
          if (this.filteredData.includes(key)) {
            this.pkgPersonNames.push(this.post[key].supplierDetails.pkgPersonName);
            this.companyNames.push(this.post[key].supplierDetails.companyName);
            this.printingid = this.filteredData;
          }
        });
    
        // Show toaster for data found
        this.toastr.success('Data found!', 'Success');
      }
       else {
        // Show toaster for data not found
        this.toastr.error('Data not found!', 'Error');
        this.saafsafai();
      }
    }
    
    // searchele(): void {
    //   this.filteredData = this.vendorCodes.filter(item => {
    //     // Convert both strings to lowercase for case-insensitive comparison
    //     const itemLowerCase = item.toLowerCase();
    //     const searchLowerCase = this.search.toLowerCase();
    
    //     // Check if the item exactly matches the search string
    //     if (itemLowerCase === searchLowerCase) {
    //       return true;
    //     }
    
    //     // If not, split both strings into characters and compare each character
    //     if (itemLowerCase.length === searchLowerCase.length) {
    //       // Use every() method to compare each character of the strings
    //       return itemLowerCase.split('').every((char, index) => {
    //         return char === searchLowerCase[index];
    //       });
    //     }
    
    //     // If lengths are different, return false
    //     return false;
    //   });
    // }
    
   
    

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
