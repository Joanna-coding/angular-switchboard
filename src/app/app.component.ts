import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = [true, false, true, false, true, false, true,false,true, false];
  flipSwitch(idx){
    this.switches[idx] = !this.switches[idx];
    
  }
}
