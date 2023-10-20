import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-apples',
  template: '<h1>Apples</h1>',
})
export class ApplesComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [ApplesComponent],
  exports: [ApplesComponent],
})
export class ApplesModule {}
