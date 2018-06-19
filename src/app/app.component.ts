import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = "Sophie's App";
  name= 'Ayesha';
        
 constructor(private http: HttpClient) {}
 
 ngOnInit(){
     
    
    
 }
 
   
}
