import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-board',
  templateUrl: 'score-board.html',
})
export class ScoreBoardPage {

  totalScoreTeam1: number;
  totalScoreTeam2: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.totalScoreTeam1 = 0;
    this.totalScoreTeam2 = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreBoardPage');
  }

  triesFunc() {
      this.totalScoreTeam1 = this.totalScoreTeam1 + 5;
  }
  consFunc(){
    this.totalScoreTeam1 = this.totalScoreTeam1 + 3;
  }
  pensFunc(){
    this.totalScoreTeam1 = this.totalScoreTeam1 + 2;
  }
  dropGoalFunc(){
    this.totalScoreTeam1 = this.totalScoreTeam1 + 2;
  }


  /* team2 */

  triesFunc2() {
    this.totalScoreTeam2 = this.totalScoreTeam2 + 5;
}
consFunc2(){
  this.totalScoreTeam2 = this.totalScoreTeam2 + 3;
}
pensFunc2(){
  this.totalScoreTeam2 = this.totalScoreTeam2 + 2;
}
dropGoalFunc2(){
  this.totalScoreTeam2 = this.totalScoreTeam2 + 2;
}


reset(){
  this.totalScoreTeam1 = 0;
  this.totalScoreTeam2 = 0;
}

}
