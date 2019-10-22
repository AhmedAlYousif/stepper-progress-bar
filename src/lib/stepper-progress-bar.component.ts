import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-stepperProgressBar',
  templateUrl: './stepper-progress-bar.component.html',
  styleUrls: ['./stepper-progress-bar.component.css'],
})
export class StepperProgressBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log("init");
    if(this.controller != null){
      this.controller.setParent(this);
    } else console.log("didn't set parent!");
  }

  @Input() steps:Step[];
  @Input() controller:StepperProgressBarController;

  private currentStep = -1;
  nextStep(){
    if(this.currentStep > -1 && this.currentStep < this.steps.length)
      this.steps[this.currentStep].complete();
    if(this.currentStep < this.steps.length) this.currentStep++;
    if(this.currentStep < this.steps.length)
      this.steps[this.currentStep].activate();
  }
  previousStep(){
    if(this.currentStep > -1 && this.currentStep < this.steps.length)
      this.steps[this.currentStep].deactivate();
    if(this.currentStep > -1) this.currentStep--
    if(this.currentStep > -1)
      this.steps[this.currentStep].activate();
  }
  

}

export class StepperProgressBarController{
  private parent:StepperProgressBarComponent;
  setParent(parent:StepperProgressBarComponent){
    if(this.parent !== null)
      this.parent = parent;
    else console.log("already have parent!");
  }
  nextStep(){
    if(this.parent !== null){
      this.parent.nextStep();
    }
    else console.log("parent is null");
  }
  previousStep(){
    if(this.parent !== null){
      this.parent.previousStep();
    }
    else console.log("parent is null");
  }
}

export class Step {

  public label:string;

  constructor(label:string){
    this.label = label;
  }

  private isActive:boolean = false;
  private isComplete:boolean = false;

  private mainClass:string = "progress-step";
  private activeClass:string = " is-active ";
  private completeClass:string = " is-complete ";
  private classes:string = this.mainClass;
  
  public activate(){
    if(!this.isActive){
      this.classes = this.mainClass + this.activeClass;
      this.isActive = true;
      this.isComplete = false;
    }
  }
  public complete(){
    if(!this.isComplete){
      this.classes = this.mainClass + this.completeClass;
      this.isActive = false;
      this.isComplete = true;
    }
  }
  public deactivate(){
    if(this.isActive){
      this.classes = this.mainClass;
      this.isActive = false;
      this.isComplete = false;
    }
  }
}