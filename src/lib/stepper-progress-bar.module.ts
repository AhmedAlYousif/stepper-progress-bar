import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StepperProgressBarComponent } from './stepper-progress-bar.component';



@NgModule({
  declarations: [StepperProgressBarComponent],
  imports: [
    BrowserModule,
  ],
  exports: [StepperProgressBarComponent]
})
export class StepperProgressBarModule { }
