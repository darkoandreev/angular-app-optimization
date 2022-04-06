import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

import { EMPLOYEE_NAMES } from './shared/constants/names';
import { Employee } from './shared/models/employee.model';
import { ListGenerator } from './shared/service/list-generator.service';

const NUM_RANGE: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  paysafeEmployees!: List<Employee>;
  devbgEmployees!: List<Employee>;
  label!: string;

  constructor(private generator: ListGenerator) {}

  ngOnInit(): void {
    this.paysafeEmployees = List(this.generator.generate(EMPLOYEE_NAMES, NUM_RANGE, 100));
    this.devbgEmployees = List(this.generator.generate(EMPLOYEE_NAMES, NUM_RANGE, 100));
  }

  add(list: List<Employee>, name: string): List<Employee> {
    return list.unshift({ label: name, num: this.generator.generateNumber(NUM_RANGE) });
  }

  remove(list: List<Employee>, node: Employee): List<Employee> {
    return list.splice(list.indexOf(node), 1);
  }
}
