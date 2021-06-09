import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

constructor() { }

GetCompanies() {
  return [
     {
       ImageSrc: "assets/images/resources/cmp-icon.png",
       CompanyName: "Facebook Inc."
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon1.png",
       CompanyName: "Google Inc."
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon2.png",
       CompanyName: "Pinterest"
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon3.png",
       CompanyName: "Microsoft Inc."
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon4.png",
       CompanyName: "Line Inc."
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon5.png",
       CompanyName: "Linked In"
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon6.png",
       CompanyName: "Apple Inc."
     },

     {
       ImageSrc: "assets/images/resources/cmp-icon7.png",
       CompanyName: "Samsung Inc."
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon8.png",
       CompanyName: "Oppo"
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon9.png",
       CompanyName: "Game loft"
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon10.png",
       CompanyName: "Android Inc."
     },
     {
       ImageSrc: "assets/images/resources/cmp-icon11.png",
       CompanyName: "Oracle"
     }
   ]
 }
}
