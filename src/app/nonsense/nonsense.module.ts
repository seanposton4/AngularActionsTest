import { ColorCardComponent } from './color-card/color-card.component';
import { CounterComponent}    from './counter/counter.component';
import { NgModule }           from '@angular/core';
import { CommonModule}        from '@angular/common';


@NgModule({
  declarations: [
    ColorCardComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent,
    ColorCardComponent
  ]
})
export class NonsenseModule {}
