import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './dogs/dogs.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from '../shared/shared.module';
import { OperationModule } from '../operation/operation.module';


@NgModule({
  declarations: [
    DogsComponent, AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    OperationModule
  ]
})
export class AdminModule { }
