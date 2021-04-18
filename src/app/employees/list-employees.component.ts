import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mary Akonumah',
      gender: 'Female',
      contactPreference: 'Email',
      phoneNumber: 2348054982155,
      dateOfBirth: new Date('10/23/1988'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png',
    },
    {
      id: 2,
      name: 'Afolabi Opakunle',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 2348030810384,
      department: 'ICT',
      isActive: true,
      dateOfBirth: new Date('09/11/1985'),
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 3,
      name: 'John Otabil',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 345204020040,
      dateOfBirth: new Date('2/24/1998'),
      department: 'Finance',
      isActive: false,
      photoPath: 'assets/images/john.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
