/**
 * Created by: Ashwini Agre
 * Date: 19/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'employeedetails',
  templateUrl: 'employeedetails.component.html'
})
export class EmployeedetailsComponent implements OnInit{
  employeedetailsModel:EmployeedetailsModel;
        radiogroupData:any; 
  constructor(private http: HttpClient) {
    this.employeedetailsModel=new EmployeedetailsModel();
     	 	this.radiogroupData={"data":[{"genderId":"1","gender":"male"},{"genderId":"2","gender":"female"}]};
	  }
  onClick_btn(eventData:any){ 
let response: any;
const requestJson={
id :this.employeedetailsModel.id,
firstname :this.employeedetailsModel.firstName,
lastname :this.employeedetailsModel.lastName,
genderId :this.employeedetailsModel.genderId,
age :this.employeedetailsModel.age,
dob :this.employeedetailsModel.dob,
phone :this.employeedetailsModel.phone,
email :this.employeedetailsModel.email,
Department:{
id :this.employeedetailsModel.departmentId,
}

};
this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/save',requestJson).subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.btnBindResponse_1(response);
});
}
btnBindResponse_1(response: any){
 } 
  ngOnInit(){
 	  }
 	 	

   
}
export class EmployeedetailsModel{
  id: string;  firstName: string;  lastName: string;  genderId: string;  dob: string;  age: number;  phone: string;  email: string;  departmentId: string; }
