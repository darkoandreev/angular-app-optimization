import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from 'immutable';
import { Employee } from '../shared/models/employee.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() employees!: List<Employee>;
  @Output() remove = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit(): void {
  }
}
