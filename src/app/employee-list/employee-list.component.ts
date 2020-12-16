import { Component, OnInit, employeelist } from '@angular/core';

// 引用資料類別
import { Employeeinfo } from './../employeeinfo';

// 載入service
import { EmployeeserviceService } from './../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelists: Employeeinfo[];

  // 建構子
  constructor(private employeeservice: EmployeeserviceService) {}

  ngOnInit() {
     this.getEmployees();
  }

  getEmployees(): void{
      this.employeelists = this.employeeservice.getEmployee();
  }
}
