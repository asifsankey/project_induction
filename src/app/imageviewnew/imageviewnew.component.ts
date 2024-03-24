import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-imageviewnew',
  templateUrl: './imageviewnew.component.html',
  styleUrl: './imageviewnew.component.css'
})
export class ImageviewnewComponent implements OnInit {
  imageurl:string="";
  post:any ={};
  constructor(private route:ActivatedRoute, private api:ApicallService){}
  ngOnInit():void {
    const imageUrlParam: string | null = this.route.snapshot.paramMap.get('imageUrl');

    this.route.url.subscribe((url:UrlSegment[])=>{
      url.forEach((pathData)=>{
        console.log("wwwwwwwwwwwwwwwwwwww",pathData.path)
      })
    })
    console.log('imageUrlParam:', imageUrlParam); // .pDebugging
    if (imageUrlParam !== null) {
        const updatedImageUrl = `../../${imageUrlParam.replace(/%2F/g, '/')}`; // Replace all occurrences of %2F with / and add ../../
        console.log('updatedImageUrl:', updatedImageUrl); // Debugging
        this.imageurl = updatedImageUrl;
    } else {
        // Handle the case when imageUrlParam is null
    }

  console.log(this.imageurl);

    this.api.getpost().subscribe(posts =>{
      this.post =posts;
      console.log(this.post)
     
    });
  }
}
