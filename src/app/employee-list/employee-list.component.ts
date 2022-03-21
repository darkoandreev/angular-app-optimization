import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Employee } from '../shared/models/employee.model';
@Component({
  selector: 'ps-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  @Input() employees!: Employee[];
  @Input() companyName!: string;

  @Output() remove = new EventEmitter<Employee>();
  @Output() add = new EventEmitter<string>();

  label!: string;

  handleKey(event: any): void {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  getRandomId(num: number): number {
    return Math.round(Math.random() * num + 100);
  }
}
