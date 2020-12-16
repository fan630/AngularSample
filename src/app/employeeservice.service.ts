import { Injectable } from '@angular/core';

// 引用資料類別
import {Employeeinfo} from './employeeinfo';

// 引用資料
import {employeelist} from './employeelist';

@Injectable({
  providedIn: 'root'
})

export class EmployeeserviceService {
  constructor() { }
  // 回傳員工資料
  getEmployee():Employeeinfo[]{
    return employeelist;
  }
}
