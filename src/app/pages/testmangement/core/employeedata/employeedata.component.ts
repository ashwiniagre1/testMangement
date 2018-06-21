/**
 * Created by: deepali arvind
 * Date: 20/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'employeedata',
  templateUrl: 'employeedata.component.html'
})
export class EmployeedataComponent implements OnInit{
  employeedataModel:EmployeedataModel;
 
  constructor(private http: HttpClient) {
    this.employeedataModel=new EmployeedataModel();
       }
  onSingleSelect_id(eventData:any){ 
 } 
  onClick_getBtn(eventData:any){ 
let response: any;
const requestJson={
id :this.employeedataModel.id,
};
this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/findById',requestJson).subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.getBtnBindResponse_1(response);
});
}
getBtnBindResponse_1(response: any){
this.employeedataModel.empid =response.response.id; 
this.employeedataModel.firstName =response.response.firstName; 
this.employeedataModel.lastName =response.response.lastName; 
this.employeedataModel.age =response.response.age; 


 } 
  ngOnInit(){
  }
 

   
}
export class EmployeedataModel{
  id: string;  empid: string;  firstName: string;  lastName: string;  age: string; }
