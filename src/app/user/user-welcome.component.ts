import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styles: [`.center {
    position: absolute;
    width: 150px;
    height: 50px;
    top: 50%;
    left: 50%;
    margin-left: -50px; /* margin is -0.5 * dimension */
    margin-top: -25px;
    color: #8f8f8f;
    font-weight: 200;
    font-size: 18px; 
}​`]
})
export class UserWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
