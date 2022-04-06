import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'immutable';

import { Employee } from '../shared/models/employee.model';


@Component({
  selector: 'ps-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  @Input() employees!: List<Employee>;
  @Input() companyName!: string;

  @Output() remove = new EventEmitter<Employee>();
  @Output() add = new EventEmitter<string>();
}
