# StepperProgressBar

This library represent a progress bar component that has steps in it. I used this [tutorial](https://medium.com/@beyondborders/building-a-responsive-progress-bar-ea5a0ecabe91) to create this component to be reusable in Angular.


# Install

`npm install stepper-progress-bar`

in your `app.module.ts` file:
```typescript
//...
import { StepperProgressBarModule } from 'stepper-progress-bar'
//...
@NgModule({
  //...
  imports: [
    //...
    StepperProgressBarModule,
    //...
  ],
  /...
})
export class AppModule { }
```


# How to Use

Your component HTML:

```html
    <lib-stepperProgressBar  [controller]="progressStepper" [steps]="steps"></lib-stepperProgressBar>

    <button (click)="back()">Back</button>//a button to go to previous step
    <button (click)="next()">Next</button>//a button to go to next step
```

Your component .TS:

```typescript
import { Step, StepperProgressBarController } from 'stepper-progress-bar';
//...
    steps:Step[] = new Array<Step>();
    progressStepper:StepperProgressBarController = new StepperProgressBarController();
    //...
    this.steps.push(new Step('Step 1'));
    this.steps.push(new Step('Step 2'));
    this.steps.push(new Step('Step 3'));
    //...
    next(){
        this.progressStepper.nextStep();
    }
    back(){
        this.progressStepper.previousStep();
    }
```

You can now have a vertical stepper progress bar:

in the html:
```html
    <lib-stepperProgressBar [isVertical]="isVertical" [controller]="progressStepper" [steps]="steps"></lib-stepperProgressBar>
```

in .TS
```javascript
  isVertical=true;
```