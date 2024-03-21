import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})
export class VendorComponent implements OnInit {
  vendorCode: string ="";
  post: any={};
  vendorCodes: string[] = [];
  defaultImg:string ="../assets/images/defimg.png";
  con:boolean=false;
  indexno:number=0;

  constructor(private route: ActivatedRoute,private api:ApicallService,private router: Router){

  }
  toArray(value: string | string[]): string[] {
    if (typeof value === 'string') {
      // Convert the string into an array with a single element
      return [value];
    }
    return value; // If it's already an array, return as is
  }
  v1:any;


  receivedData: any[] = [];
@ViewChildren('itemDiv') itemDivs!: QueryList<any>;
ngAfterViewInit(): void {
  this.itemDivs.forEach((itemDiv, index) => {
    const data = itemDiv.nativeElement.innerText;
    console.log('Received data:', data);
    this.receivedData[index] = data; // Replace the previous data with the new data
    // You can perform any operation with the data here
  });
}

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
  spanValue: number = 2;
  rowSpanValue:number =2;
  previousValue:any=0;
  incrementSpanValue() {
    this.spanValue++;
  }
  incrementRowSpanValue() {
    this.rowSpanValue++;
  }
  setPreviousValue(value: any): void {
    this.previousValue = value;
  }
  isConsecutiveDuplicate(currentValue: any, currentIndex: number): boolean {
    
    if (currentIndex === 0 || currentValue !== this.post[this.vendorCode].  data3.Theoretical[currentIndex - 1]) {
      return false; 
    }
    return true;
  }
  goToHomePage(): void {
    this.router.navigate(['/']); 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vendorCode = params['vendorCode'];
      
    });
    this.api.getpost().subscribe(posts =>{
      this.post =posts;
      console.log(this.post)
      this.vendorCodes = Object.keys(this.post);
      console.log(this.vendorCode)
      console.log(this.vendorCodes);
      console.log(this.post[this.vendorCode].data4)
      console.log(this.post)
      console.log(this.post[this.vendorCode].data4.Department)
    });
  }
  popup1(con:boolean,i:number){
    this.con=con;
    this.indexno=i;
  }
}
