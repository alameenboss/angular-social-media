import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-notification',
  templateUrl: './menu-notification.component.html'
})
export class MenuNotificationComponent implements OnInit {
  @Input("messages") messages;
  @Input("showmessage")
  set showmessage(value: boolean) {
    this.displayMessage = value;
  }

  messageList:any;
  displayMessage:boolean;

  constructor() { }

  ngOnInit() {
    this.messageList = this.messages;
    this.displayMessage = this.showmessage;
  }


}
