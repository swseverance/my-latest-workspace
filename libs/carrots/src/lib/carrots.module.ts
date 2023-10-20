import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-carrots',
  template: '<h1>Carrots</h1>',
})
export class CarrotsComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [CarrotsComponent],
  exports: [CarrotsComponent],
})
export class CarrotsModule {}
