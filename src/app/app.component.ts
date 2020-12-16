// import { EmployeeserviceService } from './employeeservice.service';
// import { Employeeinfo } from './employeeinfo';
// import { Component } from '@angular/core';
// import { employeelist } from './employeelist';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//    title = 'app';
//    employeelists = employeelist;

//    doclickevent():void{
//      alert("TEST!");
//    }
// }


// import { Component, OnInit } from '@angular/core';

// // 引用資料類別
// import {Employeeinfo} from './employeeinfo';

// // 載入service類別
// import {EmployeeserviceService} from './employeeservice.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit{
//    employeelists:Employeeinfo[];
//    // 建構子
//    constructor(private employeeService: EmployeeserviceService){}

//    // 初始化, 要先元件implement OnInit
//    // 一載入就呼叫此函式
//    ngOnInit(){
//      this.getEmployees()
//    };

//    getEmployees():void{
//      this.employeelists = this.employeeService.getEmployee();
//    }

//    //觸發事件
//    doclickevent():void{
//      alert('test!!!');
//    }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

   // 建構子
   constructor(){}

   // 初始化, 要先元件implement OnInit
   ngOnInit(){

   };
}
