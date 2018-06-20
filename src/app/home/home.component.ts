import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"TestUi","routerLink":"core/testui","selected":false},{"text":"Employee Details","routerLink":"core/employeedetails","selected":false},{"text":"Employee List","routerLink":"core/employeelist","selected":false},{"text":"Employee Data","routerLink":"core/employeedata","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
