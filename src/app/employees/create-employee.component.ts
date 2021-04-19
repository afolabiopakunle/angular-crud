import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  fullName;
  email;
  employeeForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(employeeForm: NgForm) {
    console.log(employeeForm.value);
    employeeForm.reset()
  }

}
