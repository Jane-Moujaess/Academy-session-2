import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
  ]
})
export class ContactsModule { }
