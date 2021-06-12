import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  messages = [
    {
      user:'Mario',
      msg: 'It´sa mi Mariooo'
    },
    {
      user:'Luigi',
      msg: 'Mario para com isso q da vergonha'
    },
    {
      user:'Mario',
      msg: 'It´sa mi Mariooo'
    }
  ];

  currentUser ='Max';

  

}
