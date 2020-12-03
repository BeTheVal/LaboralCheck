import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor() {}
  getImage(id:number){
    return "../../assets/Icon-image.png"
  }
 
}
