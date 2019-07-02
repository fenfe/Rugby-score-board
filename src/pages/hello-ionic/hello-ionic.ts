import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScoreBoardPage } from '../score-board/score-board';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private navCntrl: NavController) {

  }
  nextPage() {
    this.navCntrl.push(ScoreBoardPage);
  }
}
