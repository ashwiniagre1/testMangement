/**
 * Created by: Ashwini Agre
 * Date: 20/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testui',
  templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit{
  testuiModel:TestuiModel;
 
  constructor(private http: HttpClient) {
    this.testuiModel=new TestuiModel();
       }
  ngOnInit(){
  }
 

   
}
export class TestuiModel{
  dept: string; }
