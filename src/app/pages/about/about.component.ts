
import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports:[FormsModule, AsyncPipe], //previously didn't need as the needed imports were imported at the level of the module the component is declared in
  standalone:true
})
export class AboutComponent {
  name:string="";

  subscription=new Subscription();

  regularCounter=0;
  regularDerivedCounter=this.regularCounter*10;

  subjectCounter=new BehaviorSubject<number>(0);
  subjectDerivedCounter=this.subjectCounter.value;

  signalCounter=signal<number>(0);
  signalDerivedCounter=computed(()=>this.signalCounter()*10);

  signalMultiplier=signal<number>(2);
  signalDerivedMultiplier=computed(()=>this.signalCounter()*untracked(this.signalMultiplier));
  //since signalMultiplier is untracked, any changes that affect signalMultiplier won't trigger an update to signalDeivedMultiplier,
  //only changes affecting signalCounter will trigger an update in the computed property

  signalOverrideInEffect=signal<string>("initial");

  signalEqualityTestUpdate=signal<{name:string, age:number}>({name:"Jane",age:23});

  signalEqualityTestNoUpdate=signal<{name:string,age:number}>({name:"Mia",age:21},{ equal: (a, b) => a.name === b.name && a.age === b.age });

  replaceSameSignal(){
    this.signalEqualityTestUpdate.set({name:"Jane",age:23});
    this.signalEqualityTestNoUpdate.set({name:"Mia",age:21});
  }

  constructor(){
    // effect(()=>{
    //   alert(`The derived multiplier result has changed to ${this.signalDerivedMultiplier()}`);
    //   this.signalOverrideInEffect.update(s=>s+"a");
    // },{allowSignalWrites:true})

    effect(()=>{
      console.log(`Value of ${this.signalEqualityTestUpdate().name} has updated`);
    });

    effect(()=>{
      console.log(`Value of ${this.signalEqualityTestNoUpdate().name} has updated`);
    });
  }

  ngOnInit(){
    const counterSub=this.subjectCounter.subscribe((counter)=>this.subjectDerivedCounter=counter*10);
    this.subscription.add(counterSub);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  incrementRegularCounter():void{
    this.regularCounter++;
  }

  incrementSubjectCounter():void{
    this.subjectCounter.next(this.subjectCounter.value+1);
  }

  incrementSignalCounter():void{
    this.signalCounter.set(this.signalCounter()+1);
    // this.signalCounter.update(c=>c+1); same outcome just different syntax
  }

  incrementSignalMultiplier():void{
    this.signalMultiplier.update(m=>m+1);
  }

}
