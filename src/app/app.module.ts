import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesProfilesComponent } from './companies-profiles/companies-profiles.component';
import { NavUserInfoComponent } from './nav-user-info/nav-user-info.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { PostModule } from './post/post.module';
import { UserDataComponent } from './home/user-data/user-data.component';
import { SuggestionsComponent } from './home/suggestions/suggestions.component';
import { TagsSecComponent } from './home/tags-sec/tags-sec.component';
import { WidgetModule } from './widget/widget.module';
import { MenuNotificationComponent } from './nav-menu/menu-notification/menu-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    CompaniesComponent,
    CompaniesProfilesComponent,
    NavUserInfoComponent,
    NavMenuComponent,
    HomeComponent,
    LoadingComponent,
    UserDataComponent,
    SuggestionsComponent,
    TagsSecComponent,
    MenuNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    WidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
