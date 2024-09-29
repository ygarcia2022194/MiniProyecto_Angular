import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuditDialogComponent } from '../shared/audit-dialog/audit-dialog.component';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  constructor(public dialog: MatDialog) {}

  openAuditDialog(): void {
    const dialogRef = this.dialog.open(AuditDialogComponent, {
      data: {
        UserCreated: 'user1@example.com',
        DateCreated: '2024-01-01 12:00:00',
        UserUpdated: 'user2@example.com',
        DateUpdated: '2024-09-28 15:00:00'
      }
    });
  }
}
