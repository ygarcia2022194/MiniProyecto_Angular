import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WhiteSpaceDirective } from './white-space.directive';


@NgModule({
  declarations: [
    WhiteSpaceDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    WhiteSpaceDirective
  ]
})
export class SharedModule { }
