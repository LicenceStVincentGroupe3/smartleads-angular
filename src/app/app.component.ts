import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // title = 'smartleads-angular';
    date: any;
    constructor() {
    }

    ngOnInit() {
        const arrayDays = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        const arrayMonth = new Array(
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
        let datetime = new Date();

        let year = datetime.getFullYear();
        let month = arrayMonth[datetime.getMonth()];
        let dayNumber = datetime.getDate();
        let dayLetter = arrayDays[datetime.getDay()];

        this.date = dayLetter + ' ' + dayNumber.toString() + ' ' + month + ' ' + year.toString();
    }
}
