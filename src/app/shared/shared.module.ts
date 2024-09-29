import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { WhiteSpaceDirective } from './directives/white-space.directive';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuditDialogComponent } from './audit-dialog/audit-dialog.component';



@NgModule({
  declarations: [
    WhiteSpaceDirective,
    UserInfoComponent,
    AuditDialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    WhiteSpaceDirective,
    UserInfoComponent
  ]
})
export class SharedModule { }
