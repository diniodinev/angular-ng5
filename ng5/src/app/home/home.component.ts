import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add item';
  goalText: string = 'My fist life goal.';
  goals = [];

  constructor() {
  }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
  this.goals.push(this.goalText);
  this.goalText = '';
  this.itemCount = this.goals.length;
  }

}
