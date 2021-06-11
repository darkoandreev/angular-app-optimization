import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
