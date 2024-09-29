import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationPageComponent } from './operation-page.component';

const routes: Routes = [
  { path: 'operation-page', component: OperationPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
