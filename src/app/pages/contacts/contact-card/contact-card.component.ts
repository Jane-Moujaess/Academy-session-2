import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  // @Input() name: string="";
  // @Input() email: string="";
  // @Input() phone: string="";
  // @Input() id!: number;

  name = input<string>(''); //input using signals
  email = input<string>('');
  phone = input<string>('');
  id = input<number>();   

  // @Output() notifyParent=new EventEmitter<string>();

  notifyParent=output<string>();

  // constructor(private x:Router, private y:ActivatedRoute){ // dependency injection the old way
  // }

  x=inject(Router); //new inject method
  y=inject(ActivatedRoute);


  onNavigate():void{
    // this.router.navigate([`${this.id}`]); //won't work because it isn't relative, it will try to navigate to localhost:4200/id instead of localhost:4200/contacts/id
    // this.x.navigate(['/contacts',this.id]); //this works because the absolute route does match a defined route

    // this.x.navigate([`${this.id}`],{relativeTo:this.y}); //old approach
    this.x.navigate([`${this.id()}`],{relativeTo:this.y});
  }

  onNavigateByUrl():void{
    // this.x.navigateByUrl(`/contacts/${this.id}`); //old approach
    this.x.navigateByUrl(`/contacts/${this.id()}`);
  }

  onNotifyParentClicked():void{
    // this.notifyParent.emit(this.name); //old input approach
    this.notifyParent.emit(this.name()); //now need to use name() like so to access its value

  }
}
