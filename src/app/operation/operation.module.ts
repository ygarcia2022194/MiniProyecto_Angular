import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationRoutingModule } from './operation-routing.module';
import { OperationPageComponent } from './operation-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OperationPageComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    SharedModule
  ],
  exports: [
    OperationPageComponent
  ]
})
export class OperationModule { }
