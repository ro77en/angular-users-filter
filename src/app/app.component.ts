import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];

  // Simulando HTTP Request
  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
    }, 3000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = this.filterUsersList(
      filterOptions,
      this.usersList
    );
  }

  resetFilter() {
    this.usersListFiltered = UsersList;
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(
      filterOptions.status,
      filteredList
    );
    filteredList = this.filterUsersListByDate(
      filterOptions.startDate,
      filterOptions.endDate,
      filteredList
    );

    return filteredList;
  }

  filterUsersListByDate(
    startDate: Date | undefined,
    endDate: Date | undefined,
    usersList: IUser[]
  ): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
      return usersList;
    }

    const checkDateInterval = (user: IUser) =>
      isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
      });

    const filteredList = usersList.filter(checkDateInterval);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]) {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList;
  }

  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]) {
    const EMPTY_STATUS = status === undefined;

    if (EMPTY_STATUS) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
  }
}
