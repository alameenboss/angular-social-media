import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/service/home.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html'
})
export class UserDataComponent implements OnInit {
  userInformation;

  constructor(private homeService:HomeService) { }

  ngOnInit() {
  this.userInformation = this.homeService.GetUserData()
  }

  

}
