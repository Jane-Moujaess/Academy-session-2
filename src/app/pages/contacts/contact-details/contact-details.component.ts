import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  contactId!: string;

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id')!;
  }

  onBackClick():void{
    this.router.navigate([".."],{relativeTo:this.route});
  }
}
