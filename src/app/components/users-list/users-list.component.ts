import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({ required: true })
  usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    console.log('user', user);
    this.userSelectedEmit.emit(user);
  }
}
