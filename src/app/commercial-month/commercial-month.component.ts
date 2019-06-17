import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial-month',
  templateUrl: './commercial-month.component.html',
  styleUrls: ['./commercial-month.component.css']
})
export class CommercialMonthComponent implements OnInit {

  score;
  contactWon = 5;
  updatedContact = 24;
  lostContact = 3;
  constructor() { }

  ngOnInit() {
    this.score = this.updatedContact + this.contactWon - this.lostContact;
  }

}
