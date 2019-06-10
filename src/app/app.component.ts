import { Component } from '@angular/core';
import { DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dtaservice:DataService){

  }
  someprop:string = "";
  ngOnInit(){
    console.log(this.dtaservice.cars);
    this.someprop = this.dtaservice.myData();

  }
 
}
