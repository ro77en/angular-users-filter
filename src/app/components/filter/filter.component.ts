import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    {
      description: 'Ativo',
      value: true,
    },
    {
      description: 'Inativo',
      value: false,
    },
  ];

  @Output('onFilter') onFilterEmit = new EventEmitter<IFilterOptions>();

  onFilter() {
    this.onFilterEmit.emit(this.filterOptions);
  }

  @Output('resetFilter') resetFilterEmit = new EventEmitter();

  resetFilter() {
    this.filterOptions.startDate = undefined;
    this.filterOptions.endDate = undefined;
    this.filterOptions.status = undefined;
    this.resetFilterEmit.emit();
  }
}
