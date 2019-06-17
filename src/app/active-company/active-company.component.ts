import {Component, OnInit} from '@angular/core';
import { GetNbEntityService } from '../get-nb-entity.service';

@Component({
    selector: 'app-active-company',
    templateUrl: './active-company.component.html',
    styleUrls: ['./active-company.component.css']
})
export class ActiveCompanyComponent implements OnInit {

    constructor(private nbEntityService: GetNbEntityService) {
    }

    ngOnInit() {
        this.nbEntityService.getNbEntity('http://localhost:8000/api/company/').then(
            res => {
                /*console.log(res);*/ /*Décommentez pour voir le resultat dans la console*/
            }
        ).catch( e => {
            alert('error fetching data');
        });
    }
}
