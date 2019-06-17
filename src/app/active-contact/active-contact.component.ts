import { Component, OnInit } from '@angular/core';
import { GetNbEntityService } from '../get-nb-entity.service';

@Component({
  selector: 'app-active-contact',
  templateUrl: './active-contact.component.html',
  styleUrls: ['./active-contact.component.css']
})
export class ActiveContactComponent implements OnInit {

    constructor(private nbEntityService: GetNbEntityService) {
    }

    ngOnInit() {
        this.nbEntityService.getNbEntity('http://localhost:8000/api/contact/').then(
            res => {
                /*console.log(res);*/ /*Décommentez pour voir le resultat dans la console*/
            }
        ).catch( e => {
            alert('error fetching data');
        });
    }

}
