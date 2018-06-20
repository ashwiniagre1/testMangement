/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/testui', loadChildren: './../pages/testmangement/core/testui/testui.module#TestuiModule'
     	},	
	     	{
     	path: 'core/employeedetails', loadChildren: './../pages/testmangement/core/employeedetails/employeedetails.module#EmployeedetailsModule'
     	},	
	     	{
     	path: 'core/employeelist', loadChildren: './../pages/testmangement/core/employeelist/employeelist.module#EmployeelistModule'
     	},	
	     	{
     	path: 'core/employeedata', loadChildren: './../pages/testmangement/core/employeedata/employeedata.module#EmployeedataModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}