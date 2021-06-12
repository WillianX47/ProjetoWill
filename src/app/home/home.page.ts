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
      user:'Simon',
      msg: 'Hey Wasup'
    },
    {
      user:'Max',
      msg: 'Working on the ionic mission'
    }
  ];

  currentUser ='Max';
  newMsg ='';

  sendMessage(){
    this.messages.push({
      user: 'Max',
      msg: this.newMsg
    });
    this.newMsg = 'Funcionou';
  }

  sendMessage2(){
    this.messages.push({
      user: 'Max',
      msg: this.newMsg
    });
    this.newMsg = 'mensagem dois';
  }

  
}
