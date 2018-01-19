import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    FirstName: String = 'Sagar';
    LastName: String = 'Arora';
    Age: String = '24';
    Gender : String = 'Male'
}