import { Component } from '@angular/core';

@Component({
  selector: 'app-operation-page',
  templateUrl: './operation-page.component.html',
  styleUrls: ['./operation-page.component.scss']
})
export class OperationPageComponent {
  showInfo = false;

  userInfo = {
    UserCreated: 'OperationUser',
    DateCreated: new Date('2023-02-02'),
    UserUpdated: 'OperationUserUpdated',
    DateUpdated: new Date('2023-07-20')
  };

  showUserInfo() {
    this.showInfo = !this.showInfo;
  }
}
