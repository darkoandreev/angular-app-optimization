import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Employee } from '../shared/models/employee.model';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

@Component({
  selector: 'ps-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.scss']
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
    return fibonacci(num);
  }
}
