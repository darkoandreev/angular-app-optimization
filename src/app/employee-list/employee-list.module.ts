import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  declarations: [EmployeeListComponent],
  exports: [EmployeeListComponent]
})
export class EmployeeListModule {}
