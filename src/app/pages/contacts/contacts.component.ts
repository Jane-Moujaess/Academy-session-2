import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts = [
      { id:1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890' },
      { id:2, name: 'Bob Smith', email: 'bob@example.com', phone: '987-654-3210' },
      { id:3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '555-123-4567' }
  ];

  message="";

  handleNotification(event:string):void{
    this.message=`${event} just sent a message!`;
  }
}
