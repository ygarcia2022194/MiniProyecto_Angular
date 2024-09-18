import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './dogs/dogs.component';
import { FormsModule } from '@angular/forms';
import { WhiteSpaceDirective } from '../shared/directives/white-space.directive';


@NgModule({
  declarations: [
    DogsComponent, WhiteSpaceDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
