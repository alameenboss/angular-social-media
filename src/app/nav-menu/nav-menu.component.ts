import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit {
  navMenu: any;
  constructor() { }

  ngOnInit(): void {
    this.navMenu = this.GetMenu();
  }

  menuClick(menu){
    menu.showmessage = !menu.showmessage ;
  }

  GetMenu(): any {
    return [{
      name: "Home",
      imageurl: "assets/images/icon1.png",
      routerLink: '/home',
      showmessage:false
    },
    {
      name: "Companies",
      imageurl: "assets/images/icon2.png",
      routerLink: '/companies',
      showmessage:false,
      submenu: [
        {
          name: "Companies",
          routerLink: '/companies'
        },
        {
          name: "Company Profile",
          routerLink: '/companyprofile'
        }
      ]
    }, 
    {
      name: "Projects",
      imageurl: "assets/images/icon3.png",
      routerLink: '/projects',
      showmessage:false
    },
    {
      name: "Profiles",
      imageurl: "assets/images/icon4.png",
      routerLink: '/profiles',
      showmessage:false,
      submenu: [
        {
          name: "User Profile",
          routerLink: '/user-profile'
        },
        {
          name: "My Profile Feed",
          routerLink: '/my-profile-feed'
        }
      ]
    },
    {
      name: "Jobs",
      showmessage:false,
      imageurl: "assets/images/icon5.png",
      routerLink: '/jobs'
    },
    {
      name: "Messages",
      imageurl: "assets/images/icon6.png",      
      showmessage:false,
      messages: {
        title: 'View All Messsages',
        messages: [{
          userimageurl: 'assets/images/resources/ny-img1.png',
          username: 'Jassica William',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
          time: '2 min ago'
        },
        {
          userimageurl: 'assets/images/resources/ny-img2.png',
          username: 'Jassica William',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
          time: '2 min ago'
        },
        {
          userimageurl: 'assets/images/resources/ny-img3.png',
          username: 'Jassica William',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
          time: '2 min ago'
        }]
      }
    },
    {
      name: "Notification",
      imageurl: "assets/images/icon7.png",
      showmessage:false,      
      messages: {
        title: 'View All Notification',
        messages: [{
          userimageurl: 'assets/images/resources/ny-img1.png',
          username: 'Jassica William',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
          time: '2 min ago'
        },
        {
          userimageurl: 'assets/images/resources/ny-img2.png',
          username: 'Jassica William',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
          time: '2 min ago'
        },
        {
          userimageurl: 'assets/images/resources/ny-img3.png',
          username: 'Jassica William',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
          time: '2 min ago'
        }]
      }
    }]
  }
}
