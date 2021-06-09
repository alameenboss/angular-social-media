import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/service/home.service';
import { SuggestedUserVM } from 'src/model/SuggestedUserVM';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html'
})
export class SuggestionsComponent implements OnInit {
  title:string;
  suggestedUsers:SuggestedUserVM[];
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.title ="Suggestions123";
   this.suggestedUsers = this.homeService.GetUserSuggestion();
  }

}
