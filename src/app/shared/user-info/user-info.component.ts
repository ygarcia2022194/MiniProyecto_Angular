import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() userInfo!: {
    UserCreated: string;
    DateCreated: Date;
    UserUpdated: string;
    DateUpdated: Date;
  };
}
