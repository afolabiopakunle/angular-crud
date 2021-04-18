import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  fullName;
  email;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(employeeForm) {
    console.log(employeeForm);
  }

}
