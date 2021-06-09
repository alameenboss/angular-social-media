import { Injectable } from '@angular/core';
import { SuggestedUserVM } from 'src/model/SuggestedUserVM';
import { TopJobsVM } from 'src/model/TopJobsVM';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }


  GetUserSuggestion(): SuggestedUserVM[] {
    return [
      {
        imagesrc: "assets/images/resources/s1.png",
        name: "Jessica William",
        designation: "Graphic Designer"
      },
      {
        imagesrc: "assets/images/resources/s2.png",
        name: "John Doe",
        designation: "PHP Developer"
      },
      {
        imagesrc: "assets/images/resources/s3.png",
        name: "Poonam",
        designation: "Wordpress Developer"
      },
      {
        imagesrc: "assets/images/resources/s4.png",
        name: "Bill Gates",
        designation: "C & C++ Developer"
      },
      {
        imagesrc: "assets/images/resources/s5.png",
        name: "Jessica William",
        designation: "Graphic Designer"
      },
      {
        imagesrc: "assets/images/resources/s6.png",
        name: "John Doe",
        designation: "PHP Developer"
      }
    ]
  }

  GetTopJobs(): TopJobsVM[] {
    return [
      {
        Title: "Senior Product Designer",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
        Rate: "$25/hr"
      },
      {
        Title: "Senior UI / UX Designer",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
        Rate: "$25/hr"
      },
      {
        Title: "Junior Seo Designer",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
        Rate: "$25/hr"
      },
      {
        Title: "Senior PHP Designer",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
        Rate: "$25/hr"
      },
      {
        Title: "Senior Developer Designer",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
        Rate: "$25/hr"
      }
    ]
  }

  GetUserData()
  {
    return {
      ImageSrc :"assets/images/resources/user-pic.png",
      Name:"John Doe",
      Designation:"Graphic Designer at Self Employed",
      Following: 34,
      Followers: 155
    }
  }

}












